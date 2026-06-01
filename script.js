// ===============================
// KAGA MARKET MAIN SCRIPT
// SAFE NAVIGATION SYSTEM
// ===============================

document.addEventListener("DOMContentLoaded", function () {

  // Default section to show when website loads
  showSection("home");

});

// ===============================
// NAVIGATION FUNCTION (MAIN FIX)
// ===============================
function showSection(sectionId) {

  // Get all sections safely
  const sections = document.querySelectorAll(".section");

  if (!sections) return;

  // Hide all sections
  sections.forEach(sec => {
    sec.style.display = "none";
  });

  // Show selected section safely
  const activeSection = document.getElementById(sectionId);

  if (activeSection) {
    activeSection.style.display = "block";
  } else {
    console.warn("Section not found: " + sectionId);
  }

  // Update active button UI (optional safety feature)
  updateActiveNav(sectionId);
}

// ===============================
// ACTIVE NAV BUTTON HIGHLIGHT
// ===============================
function updateActiveNav(sectionId) {

  const buttons = document.querySelectorAll("nav button");

  if (!buttons) return;

  buttons.forEach(btn => {
    btn.classList.remove("active");
  });

  // Try to highlight matching button if onclick exists
  buttons.forEach(btn => {
    if (btn.getAttribute("onclick")) {
      if (btn.getAttribute("onclick").includes(sectionId)) {
        btn.classList.add("active");
      }
    }
  });
}

// ===============================
// SAFE ERROR HANDLER (PREVENT CRASHES)
// ===============================
window.onerror = function (message) {
  console.log("Kaga Market Error Handled:", message);
  return true;
};