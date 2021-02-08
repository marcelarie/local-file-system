
const modal = {
    template: `
        <div id="myModal" class="modal">

            <!-- Modal content -->
            <div class="modal-content">
                <span class="close">&times;</span>
                <form method="POST" action="index.php" enctype="multipart/form-data">
                    <div>
                    <span>Upload a File:</span>
                    <input type="file" name="uploadedFile" />
                    </div>

                    <input type="submit" name="uploadBtn" value="Upload" />
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
    }
}

export{modal}