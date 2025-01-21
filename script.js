const gridSize = document.querySelector("#setGrid")

gridSize.addEventListener("click", function() {
    const userInput= parseInt(prompt ("Choose how many sides for the grid (Max. 100):"), 10);
    if (userInput > 0 && userInput <= 100) {
        console.log(`Grid size set to: ${userInput} x ${userInput}`);
         

const container = document.querySelector(".container");
container.innerHTML = "";

for (x=0; x<(userInput*userInput); x++) {
    
        const div = document.createElement("div");
        
        div.style.width =  `${100 / userInput}%`; 
        div.style.height = `${100 / userInput}%`; 
        div.style.boxSizing = "border-box";
        div.style.border = "1px solid #ddd";
        
        container.appendChild(div);
        
        div.addEventListener ("mouseenter", (event) => {  
            event.target.style.backgroundColor = "purple";
                    } )
       
}
}
    else { alert ("Needs to be more than 0 and less that 100")
}
})

const clear = document.querySelector("#clear")
clear.addEventListener("click", () => {
    const divs = document.querySelectorAll (".container div");
    divs.forEach((div) => {
    div.style.backgroundColor= ""; 
    })
})





