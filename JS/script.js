function openLink(url) {
    window.open(url, "_blank");
}

/* Handle previews for infographic + video */
function openPreview(type) {
    window.location.href = "view.html?type=" + type;
}

/* On view.html: load correct content */
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
