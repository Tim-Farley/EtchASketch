for (x=0; x<(16*16); x++) {
    const container = document.querySelector(".container");
        const div = document.createElement("div");
        container.appendChild(div);
        div.addEventListener ("mouseenter", (event) => {  
            event.target.style.backgroundColor = "purple";
                    } )
       
}

const clear = document.querySelector("#clear")
clear.addEventListener("click", () => {
    const divs = document.querySelectorAll (".container div");
    divs.forEach((div) => {
    div.style.backgroundColor= ""; 
    })
})




