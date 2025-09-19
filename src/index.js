import "./style.css";
import pageLoad from "./pageLoad";
import home from "./home";
import about from "./about";

const aboutButton = document.getElementById("bttn-about");
const homeButton = document.getElementById("bttn-home");
const menu = document.getElementById("bttn-menu");
const content = document.getElementById("content");
pageLoad();

function tabSwitch(){
    aboutButton.addEventListener("click", e =>{
        content.replaceChildren();
        about();

    });

    homeButton.addEventListener("click", e =>{
        content.replaceChildren();
        home();
    });
    menu.addEventListener("click",e =>{
        content.replaceChildren();
        pageLoad();
    });

}

tabSwitch();
