// Firebase initialization and helper bindings for Kaga Market
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js';
import { getAuth, setPersistence, browserLocalPersistence, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, onAuthStateChanged, signOut } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js';
import { getFirestore, doc, getDoc, setDoc, addDoc, collection, getDocs, query, where, orderBy, serverTimestamp } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js';
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-storage.js';

const firebaseConfig = {
  apiKey: "AIzaSyCP3P8ZbEMsg6Uv9L8YFxS9iqaMe9h1Y64",
  authDomain: "kaga-market-83e7e.firebaseapp.com",
  projectId: "kaga-market-83e7e",
  storageBucket: "kaga-market-83e7e.firebasestorage.app",
  messagingSenderId: "441167232133",
  appId: "1:441167232133:web:f71bb7692e0f45608cfdec"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
setPersistence(auth, browserLocalPersistence).catch(() => {});
const db = getFirestore(app);
const storage = getStorage(app);

window.firebaseApp = app;
window.firebaseAuth = auth;
window.firebaseDb = db;
window.firebaseStorage = storage;

window.FirebaseAPI = {
  auth,
  db,
  storage,

  onAuthStateChanged(callback) {
    if (typeof callback !== 'function') return;
    onAuthStateChanged(auth, async user => {
      if (!user) {
        callback(null);
        return;
      }
      const profile = await this.getUserProfile(user.uid);
      callback({
        uid: user.uid,
        email: user.email,
        emailVerified: user.emailVerified,
        ...profile
      });
    });
  },

  async getUserProfile(uid) {
    if (!uid) return null;
    try {
      const docRef = doc(db, 'users', uid);
      const snapshot = await getDoc(docRef);
      return snapshot.exists() ? snapshot.data() : null;
    } catch (error) {
      console.error('Failed to load user profile', error);
      return null;
    }
  },

  async signIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  },

  async registerUser(email, password, profileData) {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    await sendEmailVerification(user);
    const userDoc = {
      uid: user.uid,
      email: user.email,
      role: profileData.role || 'buyer',
      firstName: profileData.firstName || '',
      lastName: profileData.lastName || '',
      name: `${profileData.firstName || ''} ${profileData.lastName || ''}`.trim(),
      phone: profileData.phone || '',
      city: profileData.city || '',
      businessName: profileData.businessName || '',
      businessCategory: profileData.businessCategory || '',
      isSeller: profileData.role === 'seller',
      businessVerified: profileData.role === 'seller' ? false : true,
      createdAt: serverTimestamp(),
      profilePhoto: profileData.profilePhoto || null,
      loginStatus: true
    };
    await setDoc(doc(db, 'users', user.uid), userDoc, { merge: true });
    return { user, profile: userDoc };
  },

  async resetPassword(email) {
    return sendPasswordResetEmail(auth, email);
  },

  async signOut() {
    return signOut(auth);
  },

  async uploadMedia(file, path) {
    if (!file || !path) return null;
    const ref = storageRef(storage, path);
    await uploadBytes(ref, file);
    return getDownloadURL(ref);
  },

  async createProduct(productData, imageFiles, videoFile) {
    const images = [];
    for (let i = 0; i < (imageFiles?.length || 0); i++) {
      const file = imageFiles[i];
      const url = await this.uploadMedia(file, `products/${Date.now()}_${file.name}`);
      if (url) images.push(url);
    }
    let videoUrl = null;
    if (videoFile) {
      videoUrl = await this.uploadMedia(videoFile, `products/${Date.now()}_${videoFile.name}`);
    }

    const productRef = await addDoc(collection(db, 'products'), {
      name: productData.name,
      description: productData.description,
      price: productData.price,
      categoryId: productData.categoryId,
      categoryLabel: productData.categoryLabel,
      condition: productData.condition,
      location: productData.location,
      sellerId: productData.sellerId,
      sellerName: productData.sellerName,
      sellerLocation: productData.sellerLocation,
      sellerVerified: productData.sellerVerified || false,
      images,
      videoUrl,
      status: 'pending',
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
      viewCount: 0,
      ratings: [],
      reviews: []
    });

    return { id: productRef.id, ...productData, images, videoUrl, status: 'pending' };
  },

  async fetchProducts() {
    const q = query(collection(db, 'products'), orderBy('createdAt', 'desc'));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  },

  async fetchVerifiedBusinesses() {
    const q = query(collection(db, 'users'), where('role', '==', 'seller'), orderBy('createdAt', 'desc'));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }
};
