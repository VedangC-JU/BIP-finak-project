function openLink(url) {
    if (url && url !== "LINK_TO_KAHOOT") {
        window.open(url, "_blank");
    } else {
        console.log("Replace placeholder URLs with real media links.");
    }
}
