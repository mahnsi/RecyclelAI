// Event listener for html page load (this function is called when the html page is loaded)
document.addEventListener("DOMContentLoaded", function() {
    const fileInput = document.getElementById("mediaFile");
    if (fileInput) {
        // Event listener for file input change
        // (whenever a change is made to "audioFile" from the html, the function "handleFileSelect" is called)
        fileInput.addEventListener("change", handleFileSelect);
    } else {
        console.error("Element with ID 'mediaFile' not found.");
    }
});


// handle file selection
function handleFileSelect(event) {
    const fileInput = document.getElementById("mediaFile");
    if (!fileInput) {
        console.error("Element with ID 'mediaFile' not found.");
        return;
    }
    const file = event.target.files[0]; // Get the selected file
    

    //print the file name to the console for now
    console.log("Selected image file:", file);

    // Event listener for form submission
    document.getElementById('upload-form').addEventListener('submit', function(event) {
        event.preventDefault();
        console.log("Form submitted");
        previewImage();
    });
}

function previewImage() {
    var input = document.getElementById('mediaFile');
    var preview = document.getElementById('image-preview');
    var result = document.getElementById('result');
    
    preview.classList.remove('hidden');
    result.classList.remove('hidden');
    document.getElementById('instruction').textContent = 'Upload New Image';
    
    var file = input.files[0];
    var reader = new FileReader();
        
    reader.onload = function(e) {
        preview.src = e.target.result;
    }
        
    reader.readAsDataURL(file);

    
}

previewImage();
