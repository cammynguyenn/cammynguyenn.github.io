const colors = ["green", "red", "white","black","blue","pink","orange","purple","teal","brown"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    // get random number between 0 - 5 (colors [0, 1, 2, 3,...])
    const randomNumber = getRandomNumber();
    console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

function getRandomNumber (){
    return Math.floor(Math.random()*colors.length);
}