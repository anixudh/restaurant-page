console.log("HI");

import {loadFrontPage} from "./frontpage";
import {loadMenuPage} from "./menupage";
import {loadContactPage} from "./contact";

const content=document.getElementById("content");

const navBar=document.createElement("div");
navBar.classList.add("navBar");

const home=document.createElement("div");
home.textContent="HOME";

const menu=document.createElement("div");
menu.textContent="MENU";

const contact=document.createElement("div");
contact.textContent="CONTACT";

navBar.appendChild(home);
navBar.appendChild(menu);
navBar.appendChild(contact);
content.appendChild(navBar);

const resetPage=()=>{
    content.textContent="";
    content.appendChild(navBar);
};


const frontPage=e=>{
    resetPage();
    loadFrontPage();
}

const menuPage=e=>{
    resetPage();
    loadMenuPage();
}

const contactPage=e=>{
    resetPage();
    loadContactPage();
}

home.addEventListener('click',frontPage);
menu.addEventListener('click',menuPage);
contact.addEventListener('click',contactPage);
loadFrontPage();