const loadFrontPage=()=>{
    const content=document.getElementById("content");

    const header=document.createElement("div");
    header.classList.add("header");
    const head=document.createElement("h1");
    head.textContent="Anirudh's Restaurant";
    header.appendChild(head);

    const img=document.createElement("img");
    img.id="rest-img";
    img.src="./images/res.jpg";

    const info=document.createElement("div");
    const br=document.createElement("br");
    info.classList.add("info");
    info.textContent="This is a restaurant which serves anything you could find anywhere, as we have chefs from all over the world";
    info.textContent+="whose expertise consists of everything that exists. Yes, that's right. What's the cost you ask? None. It's all FREE!";

    content.appendChild(header);
    content.appendChild(img);
    content.appendChild(info);
};

export {loadFrontPage};