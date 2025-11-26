// src/index.js
import { loadHomePage } from "./load.js";
import { menu } from "./menu.js";
import { contact } from "./contact.js";

//styles.css import
import "./styles.css"

// // CLEAR content first (optional, but good practice)
// const content = document.getElementById("content");
// content.innerHTML = "";


// Run the function to populate the page
loadHomePage();
// menu();
// contact();

// const btn = document.querySelector("button");
// btn.addEventListener("click", (e)=>{
//     if(e.target.textContent == "Home"){
//         const content = document.getElementById("content");
//         content.innerHTML = "";
//         loadHomePage();
//     }
//     else if(e.target.textContent == "Menu"){
//         const content = document.getElementById("content");
//         content.innerHTML = "";
//         menu();
//     }
//     else if(e.target.textContent == "Contact"){
//         const content = document.getElementById("content");
//         content.innerHTML = "";
//         contact();
//     }
// });

// let btns = document.querySelectorAll('button');
// const content = document.getElementById("content");
// btns.forEach((btn) => {
//     btn.addEventListener('click', (e)=>{
//         //debugging tip: console.log(`"${e.target.textContent}"`);
//         if(e.target.textContent.trim() == "Home"){
//             //const content = document.getElementById("content");
//             content.innerHTML = "";
//             loadHomePage();
//         }
//         else if(e.target.textContent.trim() == "Menu"){
//             //const content = document.getElementById("content");
//             content.innerHTML = "";
//             menu();
//         }
//         else if(e.target.textContent.trim() == "Contact"){
//             //const content = document.getElementById("content");
//             content.innerHTML = "";
//             contact();
//         }
//     });
// })

const content = document.getElementById("content");
const homeBtn = document.getElementById("home-btn");
const menuBtn = document.getElementById("menu-btn");
const contactBtn = document.getElementById("contact-btn");

homeBtn.addEventListener("click", () => {
    content.innerHTML = "";
    loadHomePage();
});

menuBtn.addEventListener("click", () => {
    content.innerHTML = "";
    menu();
});

contactBtn.addEventListener("click", () => {
    content.innerHTML = "";
    contact();
});
