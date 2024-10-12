document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById("smart_thumbnail").addEventListener("click", function() {
        var smartThumbnailEl = document.getElementById("smart_thumbnail");
        var msgEl = document.getElementById("smart_thumbnail_msg");
        if (smartThumbnailEl.className == "small") {
            smartThumbnailEl.className = "";
            msgEl.className = "hidden"
        } else {
            smartThumbnailEl.className = "small";
            msgEl.className = ""
        }
    })
});