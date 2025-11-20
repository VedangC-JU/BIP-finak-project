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

    if (type === "brochure") {
        container.innerHTML = `
            <h1>Brochure Preview</h1>
            <iframe src="images/brochure.pdf" 
                style="width:100%; height:800px; border-radius:10px; border:none;">
            </iframe>        
        `;
    }

    if (type === "video") {
        container.innerHTML = `
            <h1>Video Preview</h1>
            <video controls style="max-width: 90%; border-radius: 12px;">
                <source src="images/video.mp4" type="video/mp4">
                Your browser does not support video playback.
            </video>
        `;
    }
};