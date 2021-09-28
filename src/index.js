console.log("HI");

import {loadFrontPage} from "./frontpage";
import {loadMenuPage} from "./menupage";
import {loadContactPage} from "./contact";
import './style.css';

const content=document.getElementById("content");

const navBar=document.createElement("div");
navBar.classList.add("navBar");

const home=document.createElement("div");
home.classList.add("navLink");
home.textContent="HOME";

const menu=document.createElement("div");
menu.classList.add("navLink");
menu.textContent="MENU";

const contact=document.createElement("div");
contact.classList.add("navLink");
contact.textContent="CONTACT";

navBar.appendChild(home);
navBar.appendChild(menu);
navBar.appendChild(contact);
content.appendChild(navBar);

const footer=document.createElement("a");
footer.classList.add("footer");
footer.href="https://github.com/anixudh";
footer.textContent="© anixudh";

const resetPage=()=>{
    content.textContent="";
    content.appendChild(navBar);
};


const frontPage=e=>{
    resetPage();
    loadFrontPage();
    content.appendChild(footer);
}

const menuPage=e=>{
    resetPage();
    loadMenuPage();
    content.appendChild(footer);
}

const contactPage=e=>{
    resetPage();
    loadContactPage();
    content.appendChild(footer);
}

home.addEventListener('click',frontPage);
menu.addEventListener('click',menuPage);
contact.addEventListener('click',contactPage);
loadFrontPage();
content.appendChild(footer);
