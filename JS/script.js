function openLink(url) {
    window.open(url, "_blank");
}

/* This handles previews for infographic + video */
function openPreview(type) {
    window.location.href = "view.html?type=" + type;
}

/* On view.html: loading the correct content */
window.onload = function () {
    const params = new URLSearchParams(window.location.search);
    const type = params.get("type");
    const container = document.getElementById("content-area");

    if (!container) return;

    if (type === "infographic") {
        container.innerHTML = `
            <h1>Infographic Preview</h1>
            <img src="images/infographic.png" alt="Full Infographic">
        `;
    }

    if (type === "video") {
        container.innerHTML = `
            <h1>Video Preview</h1>
            <video controls>
                <source src="videos/video.mp4" type="video/mp4">
                Your browser does not support video playback.
            </video>
        `;
    }
};

// open external link (existing)
function openLink(url){
  if(!url || url.startsWith("LINK_")){
    alert("Replace placeholder URL with real link.");
    return;
  }
  window.open(url, "_blank");
}

// preview open (existing)
function openPreview(type){
  window.location.href = "view.html?type=" + encodeURIComponent(type);
}

/* --- MOBILE NAV TOGGLE --- */
document.addEventListener("DOMContentLoaded", function(){
  const hamburger = document.getElementById("hamburger");
  const mobileNav = document.getElementById("mobile-nav");

  if(hamburger && mobileNav){
    hamburger.addEventListener("click", function(){
      const isOpen = mobileNav.classList.toggle("open");
      hamburger.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }
});
