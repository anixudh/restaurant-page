const loadContactPage=()=>{
    const content=document.getElementById("content");

    const header=document.createElement("div");
    header.classList.add("header");
    const head=document.createElement("h1");
    head.textContent="Contact us!";
    header.appendChild(head);

    const links=document.createElement("div");
    links.classList.add("links");
    const github=document.createElement("a");
    github.href="http://github.com/anixudh";
    github.textContent="GitHub";

    const email=document.createElement("div");
    email.textContent="anirudh.varma196@gmail.com";
    

    content.appendChild(header);
    links.appendChild(github);
    links.appendChild(email);
    content.appendChild(links);
};

export {loadContactPage};