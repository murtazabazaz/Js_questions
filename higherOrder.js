document.addEventListener("keydown", function(e){
    let currentKey = e.key;
    console.log("you Pressed "+ currentKey+" on your keyboard") 
} )


let button1 = document.querySelector(".b1");
button1.addEventListener("click", function(event){
    document.querySelector("body").style.background = "yellow"
    console.log(event.type)
})
