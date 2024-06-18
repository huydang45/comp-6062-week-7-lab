let inputNumber = document.querySelector('#numberInput');
inputNumber.addEventListener("input", function(){
    let inputValue = inputNumber.value;
    if (inputValue <=-10 || inputValue >= 10)
    {
        alert("The number should be between -10 and 10");
    }
});

const favorFruit = {
    Name: "Banana",
    Color: "Yellow",
    Taste: "bland"
};
document.querySelector("#fruitName").innerHTML = Object.keys(favorFruit)[0] + ': ' + favorFruit.Name;
document.querySelector("#fruitColor").innerHTML = Object.keys(favorFruit)[1] + ': ' + favorFruit.Color;
document.querySelector("#fruitTaste").innerHTML = Object.keys(favorFruit)[2] + ': ' + favorFruit.Taste;
