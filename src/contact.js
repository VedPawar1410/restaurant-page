

export function contact(){
    const content = document.getElementById("content"); 

    const h1 = document.createElement("h1");
    h1.textContent = "Contact me";
    content.appendChild(h1);

    const pEmail = document.createElement("p"); // New variable
    pEmail.textContent = "Email: xyz@gmail.com";
    content.appendChild(pEmail);

    const pPhone = document.createElement("p"); // New variable
    pPhone.textContent = "Phone: +1 xxx xxxxxxx";
    content.appendChild(pPhone);
}