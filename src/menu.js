
import indian from "./paneer.jpeg";
import chinese from "./chinese.jpeg";
import thai from "./thai.jpeg";

export function menu(){
    const content = document.getElementById("content");

    const h1 = document.createElement("h1");
    h1.textContent = "Please choose from one of our bests";
    content.appendChild(h1);

    // --- Item 1 ---
    const p1 = document.createElement("p"); // New variable p1
    p1.textContent = "1. Indian Paneer Butter Masala";
    content.appendChild(p1);
    
    const img1 = document.createElement("img");
    img1.src = indian;
    content.appendChild(img1);

    // --- Item 2 ---
    const p2 = document.createElement("p"); // New variable p2
    p2.textContent = "2. Chinese Octopus Masala";
    content.appendChild(p2);
    
    const img2 = document.createElement("img");
    img2.src = chinese;
    content.appendChild(img2);

    // --- Item 3 ---
    const p3 = document.createElement("p"); // New variable p3
    p3.textContent = "3. Thai Full Plate Thali";
    content.appendChild(p3);
    
    const img3 = document.createElement("img");
    img3.src = thai;
    content.appendChild(img3);

}

export { indian, chinese, thai };