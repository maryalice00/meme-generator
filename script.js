
function generateMeme() {
    const topText = document.getElementById("topText").value;
    const bottomText = document.getElementById("bottomText").value;
    const imageInput = document.getElementById("imageInput");
    const memeContainer = document.getElementById("memeContainer");

    if (imageInput.files && imageInput.files[0]) {
        let reader = new FileReader();

        reader.onload = function (e) {
            let memeDiv = document.createElement("div");
            memeDiv.className = "meme";

            let memeImg = document.createElement("img");
            memeImg.src = e.target.result;

            let topDiv = document.createElement("div");
            topDiv.className = "memeText top";
            topDiv.innerText = topText;

            let bottomDiv = document.createElement("div");
            bottomDiv.className = "memeText bottom";
            bottomDiv.innerText = bottomText;

            let deleteBtn = document.createElement("button");
            deleteBtn.innerText = "Delete";
            deleteBtn.className = "deleteBtn";
            deleteBtn.onclick = function() {
                memeContainer.removeChild(memeDiv);
            };

            memeDiv.appendChild(memeImg);
            memeDiv.appendChild(topDiv);
            memeDiv.appendChild(bottomDiv);
            memeDiv.appendChild(deleteBtn);

            memeContainer.appendChild(memeDiv);
        };

        reader.readAsDataURL(imageInput.files[0]);

        // Reset form fields
        document.getElementById("topText").value = "";
        document.getElementById("bottomText").value = "";
        document.getElementById("imageInput").value = "";
    }
}
