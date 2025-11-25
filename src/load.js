// 1. We import the image HERE, because this module uses it.
import restaurantImage from "./restraunt.jpeg";

// 2. We export a single FUNCTION that does all the work.
export function loadHomePage() {
    const content = document.getElementById("content");

    // Create Heading
    const h1 = document.createElement("h1");
    h1.textContent = "Welcome to VR (Ved's restraunt)";
    content.appendChild(h1);

    // Create Image
    const img = document.createElement("img");
    img.src = restaurantImage;
    img.alt = "Restaurant Interior";
    content.appendChild(img);

    // Create Paragraph
    const p = document.createElement("p");
    p.textContent = "This restraunt is the most wonderful restraunt ever. From Indian, Chinese, Korean to Thai, you will get various types of food items at your table, with top notch 7 star service";
    content.appendChild(p);
}