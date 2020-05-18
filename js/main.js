const buttonSign = document.querySelectorAll("a");

console.log(buttonSign);

buttonSign.forEach( btn =>{
    btn.addEventListener("click", function(event){
        let x = event.clientX - event.target.offsetLeft;
        let y = event.clientY - event.target.offsetTop;

        let clickButton = document.createElement("span");

        clickButton.style.left = x + "px";
        clickButton.style.top = y + "px";   

        this.appendChild(clickButton);

        setTimeout(()=>{
            clickButton.remove();
        }, 1000);

    })
})