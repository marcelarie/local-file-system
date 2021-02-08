
const modal = {
    template: `
        <div id="myModal" class="modal">

            <!-- Modal content -->
            <div class="modal-content">
                <span class="close">&times;</span>
                <form method="POST" action="src/php/upload-file.php" enctype="multipart/form-data">
                    <div>
                    <p class="modal-title">Upload a File:</p>
                    <div class="drop-zone">
                        <span class="drop-zone__prompt">Drop a file here or click to download</span>
                        <input type="file" name="uploadedFile" class="drop-zone__input"/>
                    </div>
                    
                    </div>

                    <input type="submit" class="uploadBtn" name="uploadBtn" value="Upload"/>
                </form>
            </div>
  
        </div>`,
    
    modalFunction: function () {
                // Get the modal
        var modal = document.getElementById("myModal");

        // Get the button that opens the modal
        var btn = document.getElementById("myBtn");

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks on the button, open the modal
        btn.onclick = function() {
        modal.style.display = "block";
        }

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
        modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
        }
    },
     

    dropZoneFunction: function () {
        
        document.querySelectorAll(".drop-zone__input").forEach((inputElement) => {
            const dropZoneElement = inputElement.closest(".drop-zone");
          
            dropZoneElement.addEventListener("click", (e) => {
              inputElement.click();
            });
          
            inputElement.addEventListener("change", (e) => {
              if (inputElement.files.length) {
                updateThumbnail(dropZoneElement, inputElement.files[0]);
              }
            });
          
            dropZoneElement.addEventListener("dragover", (e) => {
              e.preventDefault();
              dropZoneElement.classList.add("drop-zone--over");
            });
          
            ["dragleave", "dragend"].forEach((type) => {
              dropZoneElement.addEventListener(type, (e) => {
                dropZoneElement.classList.remove("drop-zone--over");
              });
            });
          
            dropZoneElement.addEventListener("drop", (e) => {
              e.preventDefault();
          
              if (e.dataTransfer.files.length) {
                inputElement.files = e.dataTransfer.files;
                updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
              }
          
              dropZoneElement.classList.remove("drop-zone--over");
            });
        });
        function updateThumbnail(dropZoneElement, file) {
            
            let thumbnailElement = dropZoneElement.querySelector(".drop-zone__thumb");
        
            // First time - remove the prompt
            if (dropZoneElement.querySelector(".drop-zone__prompt")) {
                dropZoneElement.querySelector(".drop-zone__prompt").remove();
            }
        
            // First time - there is no thumbnail element, so lets create it
            if (!thumbnailElement) {
                thumbnailElement = document.createElement("div");
                thumbnailElement.classList.add("drop-zone__thumb");
                dropZoneElement.appendChild(thumbnailElement);
            }
        
            thumbnailElement.dataset.label = file.name;
        
            // Show thumbnail for image files
            if (file.type.startsWith("image/")) {
                const reader = new FileReader();
        
                reader.readAsDataURL(file);
                reader.onload = () => {
                    thumbnailElement.style.backgroundImage = `url('${reader.result}')`;
                };
            } else {
                thumbnailElement.style.backgroundImage = null;
            }
        }

        
    }

    
}

export{modal}