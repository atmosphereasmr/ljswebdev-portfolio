// Open or close header menu on mobile devices

let collapse = false;

function collapseMenu() {
 collapse = !collapse;
 let mobileMenu = document.getElementById("mobile-menu");
 if (!collapse) {
  mobileMenu.style.opacity = '0';
  mobileMenu.style.pointerEvents = 'none';
 } else if (collapse) {
  mobileMenu.style.opacity = '1';
  mobileMenu.style.pointerEvents = 'auto';
 }
}