const basic = document.getElementById("basic");
const professional = document.getElementById("professional");
const master = document.getElementById("master");
const button = document.getElementById("button");
const buttoncontainer  = document.getElementById("button-container");
const monthly = {"basic":["&dollar;19.99","&dollar;199.99"],"professional":["&dollar;24.99","&dollar;249.99"],"master":["&dollar;39.99","&dollar;399.99"]}
const pricing = document.querySelectorAll(".price");
let anntomon = "annual";


basic.addEventListener("mouseover", () => {
    basic.classList.add("pricinghover");
});
basic.addEventListener("mouseout", () => {
    basic.classList.remove("pricinghover");
});



professional.addEventListener("mouseover", () => {
    professional.classList.add("pricinghover");
});
professional.addEventListener("mouseout", () => {
    professional.classList.remove("pricinghover");
});

master.addEventListener("mouseover", () => {
    master.classList.add("pricinghover");
});
master.addEventListener("mouseout", () => {
    master.classList.remove("pricinghover");
});
function toggleButton(){
    
      
            button.classList.toggle("toggle");
            anntomon = anntomon === "annual" ? "monthly" : "annual";
        
            let x = 0;
            for (let i in monthly) {
                // if monthly, show monthly price; else show annual
                pricing[x].innerHTML = anntomon === "monthly" ? monthly[i][0] : monthly[i][1];
                x++;
            }
        
        

}

//buttoncontainer.addEventListener("click",toggleButton);
button.addEventListener("click",toggleButton);
