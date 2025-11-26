// src/index.js
import { loadHomePage } from "./load.js";
import { menu } from "./menu.js";
import { contact } from "./contact.js";

//styles.css import


// CLEAR content first (optional, but good practice)
const content = document.getElementById("content");
content.innerHTML = "";


// Run the function to populate the page
loadHomePage();
// menu();
// contact();