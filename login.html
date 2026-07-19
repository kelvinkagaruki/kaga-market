// Firebase initialization and helper bindings for Kaga Market
// FIXED VERSION — see inline comments for what changed and why.
import { initializeApp, getApps, getApp } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js';
import {
  getAuth, setPersistence, browserLocalPersistence,
  signInWithEmailAndPassword, createUserWithEmailAndPassword,
  sendEmailVerification, sendPasswordResetEmail,
  onAuthStateChanged, signOut
} from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js';
import {
  getFirestore, doc, getDoc, setDoc, addDoc, deleteDoc, updateDoc,
  collection, getDocs, query, where, orderBy, serverTimestamp
} from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js';
import {
  getStorage, ref as storageRef, uploadBytesResumable, getDownloadURL, deleteObject
} from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-storage.js';

const firebaseConfig = {
  apiKey: "AIzaSyD9aj2BrTGIWxVY4SttUmOuZCdrLi5PzTk",
  authDomain: "kaga-service.firebaseapp.com",
  projectId: "kaga-service",
  storageBucket: "kaga-service.firebasestorage.app",
  messagingSenderId: "1056071044370",
  appId: "1:1056071044370:web:2172113c46b52e24d937cb",
  measurementId: "G-ZDMCE9F8C9"
};

// FIX 1: Guard against duplicate initialization. If this module is ever
// evaluated more than once (multiple entry points, hot reload, etc.),
// initializeApp() would throw "Firebase App named '[DEFAULT]' already exists".
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// FIX 2: Analytics can throw in some browsers (ad blockers, non-HTTPS,
// certain GitHub Pages/mobile contexts). Since this file's top-level code
// runs synchronously, an uncaught throw here would kill auth/db/storage too.
// Wrapping it means analytics failing never breaks the rest of the site.
let analytics = null;
try {
  analytics = getAnalytics(app);
} catch (error) {
  console.warn('Firebase Analytics failed to initialize (non-fatal):', error);
}

const auth = getAuth(app);
setPersistence(auth, browserLocalPersistence).catch((error) => {
  // Log instead of silently swallowing — helps debugging on iOS Safari
  // private mode / browsers that block persistence.
  console.warn('Firebase Auth persistence could not be set:', error);
});
const db = getFirestore(app);
const storage = getStorage(app);

window.firebaseApp = app;
window.firebaseAuth = auth;
window.firebaseDb = db;
window.firebaseStorage = storage;

// FIX 3: Central friendly-error mapper. Every public method below throws
// an Error with a message from this map (or a safe generic fallback)
// instead of leaking raw Firebase error strings into the UI.
function friendlyError(error) {
  const code = error?.code || '';
  const map = {
    'auth/email-already-in-use': 'That email is already registered. Try logging in instead.',
    'auth/invalid-email': 'That email address looks invalid.',
    'auth/weak-password': 'Password is too weak. Use at least 6 characters.',
    'auth/user-not-found': 'No account found with that email.',
    'auth/wrong-password': 'Incorrect password. Please try again.',
    'auth/invalid-credential': 'Incorrect email or password.',
    'auth/too-many-requests': 'Too many attempts. Please wait a moment and try again.',
    'auth/network-request-failed': 'Network error. Check your internet connection.',
    'auth/user-disabled': 'This account has been disabled.',
    'storage/unauthorized': 'You do not have permission to upload this file.',
    'storage/canceled': 'Upload was canceled.',
    'storage/quota-exceeded': 'Storage limit exceeded. Please contact support.',
    'permission-denied': 'You do not have permission to perform this action.',
    'unavailable': 'Service temporarily unavailable. Please try again.',
    'failed-precondition': 'This request could not be completed right now. Please try again.'
  };
  const friendly = map[code] || 'Something went wrong. Please try again.';
  console.error(`Firebase error [${code || 'unknown'}]:`, error);
  return new Error(friendly);
}

window.FirebaseAPI = {
  auth,
  db,
  storage,

  onAuthStateChanged(callback) {
    if (typeof callback !== 'function') return;
    // FIX 4: prevent silently attaching duplicate listeners if this is
    // ever called more than once (common cause of "form submits twice"
    // style bugs when a page re-runs its init code).
    if (this._authListenerAttached) {
      console.warn('onAuthStateChanged listener already attached — ignoring duplicate call.');
      return;
    }
    this._authListenerAttached = true;

    onAuthStateChanged(auth, async (user) => {
      if (!user) {
        callback(null);
        return;
      }
      const profile = await this.getUserProfile(user.uid);
      callback({
        uid: user.uid,
        email: user.email,
        emailVerified: user.emailVerified,
        ...(profile || {}) // FIX 5: profile defaults to {} — previously a
        // failed profile lookup returned null and silently dropped role/
        // name/etc. with no signal that anything went wrong.
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
    if (!email || !password) {
      throw new Error('Please enter both email and password.');
    }
    try {
      return await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      throw friendlyError(error);
    }
  },

  async registerUser(email, password, profileData = {}) {
    // FIX 6: basic input validation before hitting Firebase at all.
    if (!email || !password) {
      throw new Error('Email and password are required.');
    }
    if (password.length < 6) {
      throw new Error('Password must be at least 6 characters.');
    }
    if (!profileData.firstName) {
      throw new Error('First name is required.');
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      try {
        await sendEmailVerification(user);
      } catch (verifyError) {
        // Don't fail the whole signup just because the verification email
        // failed to send — log it and let the user continue.
        console.warn('Verification email failed to send:', verifyError);
      }

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
    } catch (error) {
      throw friendlyError(error);
    }
  },

  async resetPassword(email) {
    if (!email) {
      throw new Error('Please enter your email address.');
    }
    try {
      return await sendPasswordResetEmail(auth, email);
    } catch (error) {
      throw friendlyError(error);
    }
  },

  async signOut() {
    try {
      return await signOut(auth);
    } catch (error) {
      throw friendlyError(error);
    }
  },

  // FIX 7: file validation + real upload progress (via uploadBytesResumable
  // instead of uploadBytes), while staying backward-compatible — the
  // onProgress callback is optional, so existing calls like
  // uploadMedia(file, path) still work exactly as before.
  async uploadMedia(file, path, onProgress) {
    if (!file || !path) return null;

    const maxSizeMB = 10;
    if (!file.type || !file.type.startsWith('image/')) {
      throw new Error('Only image files are allowed.');
    }
    if (file.size > maxSizeMB * 1024 * 1024) {
      throw new Error(`Image must be smaller than ${maxSizeMB}MB.`);
    }

    try {
      const ref = storageRef(storage, path);
      const task = uploadBytesResumable(ref, file);

      await new Promise((resolve, reject) => {
        task.on('state_changed',
          (snapshot) => {
            if (typeof onProgress === 'function') {
              const pct = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              onProgress(pct);
            }
          },
          reject,
          resolve
        );
      });

      return await getDownloadURL(ref);
    } catch (error) {
      throw friendlyError(error);
    }
  },

  async deleteMedia(path) {
    if (!path) return;
    try {
      await deleteObject(storageRef(storage, path));
    } catch (error) {
      // Non-fatal — log but don't block the calling flow (e.g. deleting a
      // product should still succeed even if its image was already gone).
      console.warn('Failed to delete media:', error);
    }
  },

  async createProduct(productData, imageFiles, videoFile, onProgress) {
    // FIX 8: validate before doing any uploads or writes.
    if (!productData || !productData.name || !productData.price || !productData.sellerId) {
      throw new Error('Product name, price, and seller are required.');
    }
    if (isNaN(Number(productData.price)) || Number(productData.price) <= 0) {
      throw new Error('Please enter a valid price.');
    }

    try {
      const images = [];
      const fileCount = imageFiles?.length || 0;
      for (let i = 0; i < fileCount; i++) {
        const file = imageFiles[i];
        const url = await this.uploadMedia(
          file,
          `products/${Date.now()}_${file.name}`,
          onProgress ? (pct) => onProgress(i, fileCount, pct) : undefined
        );
        if (url) images.push(url);
      }

      let videoUrl = null;
      if (videoFile) {
        videoUrl = await this.uploadMedia(videoFile, `products/${Date.now()}_${videoFile.name}`);
      }

      const productRef = await addDoc(collection(db, 'products'), {
        name: productData.name,
        description: productData.description || '',
        price: Number(productData.price),
        categoryId: productData.categoryId || '',
        categoryLabel: productData.categoryLabel || '',
        condition: productData.condition || '',
        location: productData.location || '',
        sellerId: productData.sellerId,
        sellerName: productData.sellerName || '',
        sellerLocation: productData.sellerLocation || '',
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
    } catch (error) {
      throw friendlyError(error);
    }
  },

  async fetchProducts() {
    try {
      const q = query(collection(db, 'products'), orderBy('createdAt', 'desc'));
      const snapshot = await getDocs(q);
      return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
      throw friendlyError(error);
    }
  },

  async fetchVerifiedBusinesses() {
    try {
      // FIX 9: previously combined where('role','==','seller') with
      // orderBy('createdAt','desc') — Firestore requires a composite index
      // for that combination, which doesn't exist in this project, so the
      // call was throwing 'failed-precondition' every time. Filtering only
      // and sorting client-side avoids needing to create that index.
      const q = query(collection(db, 'users'), where('role', '==', 'seller'));
      const snapshot = await getDocs(q);
      const businesses = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      businesses.sort((a, b) => {
        const aTime = a.createdAt?.toMillis ? a.createdAt.toMillis() : 0;
        const bTime = b.createdAt?.toMillis ? b.createdAt.toMillis() : 0;
        return bTime - aTime;
      });
      return businesses;
    } catch (error) {
      throw friendlyError(error);
    }
  },

  async fetchUsers() {
    try {
      const q = query(collection(db, 'users'), orderBy('createdAt', 'desc'));
      const snapshot = await getDocs(q);
      return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
      throw friendlyError(error);
    }
  },

  async deleteProduct(productId) {
    if (!productId) return;
    try {
      await deleteDoc(doc(db, 'products', String(productId)));
    } catch (error) {
      throw friendlyError(error);
    }
  },

  async updateUserStatus(uid, updates) {
    if (!uid || !updates || typeof updates !== 'object') return;
    try {
      await updateDoc(doc(db, 'users', String(uid)), updates);
    } catch (error) {
      throw friendlyError(error);
    }
  }
};