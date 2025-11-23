const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let preview1 = document.getElementById("preview1");
let preview2 = document.getElementById("preview2");
let generator = document.getElementById("generator-button");
generator.addEventListener("click", setPasswords);
let passwordLength = 15;

function fetchRandomChar() {
    let randomChar = Math.floor(Math.random() * characters.length);
    return characters[randomChar];
}

function generatePasswords() {
    let password = "";
    for (let i = 0; i < passwordLength; i++) {
        password += fetchRandomChar();
    };
    return password;
};

function setPasswords() {
    preview1.textContent = generatePasswords();
    preview2.textContent = generatePasswords();
}

