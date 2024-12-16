let img = document.querySelector(".slideImage");
let slider1 = document.querySelector (".slider1");
let slider2 = document.querySelector (".slider2");
let slider3 = document.querySelector (".slider3");

slider1.addEventListener("mouseover" , () => {
    img.src = "Images/Bottle_Orange.png";
})

slider2.addEventListener("mouseover" , () => {
    img.src = "Images/Bottle_Black.png";
})

slider3.addEventListener("mouseover" , () => {
    img.src = "Images/Bottle_Blue.png";
})