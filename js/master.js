    // toggle spain class on icon 
    document.querySelector(".font-gear .fa-gear").onclick = function () {
    this.classList.toggle("fa-spin");
    //  toggle class open on main setting box 
    document.querySelector(".setting-box").classList.toggle("open")
    };
    

    //switch colors 
let colorLi = document.querySelectorAll(".colors-list li");

    // loop on all list items
colorLi.forEach(li => {
    
    li.addEventListener("click", (e) => {
        document.documentElement.style.setProperty(`--main-color`, e.target.dataset.color);
        localStorage.setItem("color_option", e.target.dataset.color);

    });
});
    

    let mainColors = localStorage.getItem("color_option");
    if (mainColors !== null) {
        document.documentElement.style.setProperty(`--main-color`, localStorage.getItem("color_option"))
    }

//switch backgrounds
const randomBack = document.querySelector(".random-backgrounds span");
//loop on all span
randomBack.forEach(span => {
    span.addEventListener("click", (e) => {
        e.target.parentElement.querySelectorAll(".active").forEach(element => {
            element.classList.remove("active");
        });
        e.target.classList.add("active")
})})
// set landing page element 
let landingPage = document.querySelector(".landing-page");

// get array of img 
let imgArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"]; 

setInterval(function () {
    // get random number 
    let randomNumber = Math.floor(Math.random() * imgArray.length);
    // change background img 
    landingPage.style.backgroundImage = `url("imges/`+imgArray[randomNumber]+`")`
},4000)