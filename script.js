//the hex color is displayed on screen
//clicking copy code copies the code

let btn1 = document.getElementById("myButton");
let btn2 = document.getElementById("myButton2");
let copyContent = document.querySelector('.copyCode');
let color1,color2;

const generateHexColor = () => {
    let hexString = '#';
    for(let i=0; i<6; i++) {
        let hexCode = Math.floor(Math.random()*16) 
    if(hexCode>9) {
        hexCode = String.fromCharCode(65 + hexCode-10)
    }
    hexString += hexCode;
}
    return hexString;
}

btn1.addEventListener("click", ()=>{
    color1 = generateHexColor();
    btn1.textContent = color1;
    btn1.style.backgroundColor = color1;
    document.body.style.background = `linear-gradient(to right, ${color1}, ${btn2.textContent})`;
    //changing string
    copyContent.textContent = `background-image: linear-gradient(to right, ${color1}, ${btn2.textContent})`;
});

btn2.addEventListener("click", ()=>{
    color2 = generateHexColor();
    btn2.textContent = color2;
    btn2.style.backgroundColor = color2;
    document.body.style.background = `linear-gradient(to right, ${btn1.textContent}, ${color2})`;

    copyContent.textContent = `background-image: linear-gradient(to right, ${btn1.textContent}, ${color2})`;
});



copyContent.addEventListener("click", () => {
    try {
    navigator.clipboard.writeText(copyContent.innerText);
    alert("Copied content"); }
    catch(e) {
        alert("Failed to copy content!");
    }
});



