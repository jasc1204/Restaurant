import book from "./images/book.jpg"
export default function home(){

    // add background
    const content = document.getElementById("content");
    
    const background = document.createElement("div");
    background.id = "background";

    content.appendChild(background);

        // add overlay
    const centerDiv = document.createElement("div");
    centerDiv.id = "overlay";
    background.appendChild(centerDiv);


    const image1 = new Image();
    image1.src = book;
    image1.alt = "book";
    image1.id = "fullImage"
    
    centerDiv.appendChild(image1);


    
}
