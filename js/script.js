document.addEventListener("DOMContentLoaded", function() {
    // Get elements
    const userClickable = document.getElementById("user-clickable");
    const imagePreviewContainer = document.getElementById("image-preview-container");

    // Show the image preview when the user icon is clicked
    userClickable.addEventListener("click", function() {
        imagePreviewContainer.style.display = "block";
    });

    // Hide the image preview when clicking anywhere outside the container
    document.addEventListener("click", function(e) {
        if (!imagePreviewContainer.contains(e.target) && e.target !== userClickable) {
            imagePreviewContainer.style.display = "none";
        }
    });
});
