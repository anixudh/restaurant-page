const loadMenuPage=()=>{
    const content=document.getElementById("content");

    const header=document.createElement("div");
    header.classList.add("header");
    const head=document.createElement("h1");
    head.textContent="Menu";
    header.appendChild(head);

    const img=document.createElement("img");
    img.id="menu-img";
    img.src="./images/menu.jpg";

    

    content.appendChild(header);
    content.appendChild(img);
    
};

export {loadMenuPage};