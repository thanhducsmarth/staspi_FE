let perPage = 6;
let idPage = 1;
let start = 0;
let end = perPage;
let slideIndex = 0;
var element = document.getElementById("id-sld-home6");
var numberOfChildren = element.getElementsByClassName('flexbox-home6').length;

let totalPages = Math.ceil(numberOfChildren / perPage);


function renderListPage(totalPages) {
    let html = "";
    html += `<div class="cur-page cur-page-active"></div>`;
    for(let i = 1; i< totalPages ; i++){
        html += '<div class="cur-page"></div>'
        // html += '<div class="cur-page"></div>'
    }
    if (totalPages === 0) {
        html = "";
    }
    document.getElementById("sld-pagination").innerHTML = html;
}
renderListPage(totalPages);

showSlides();

function showSlides() {
    const idPages = document.querySelectorAll(".cur-page");
    const tsl = -50;
    var current = document.getElementsByClassName("cur-page-active");
    var pageSlide = document.getElementById("id-sld-home6");
        for(let i = 0; i< idPages.length ; i++){
            let translated = tsl * i;
            idPages[i].onclick = function () {
                current[0].className = current[0].className.replace("cur-page-active","");
                this.classList.add("cur-page-active");
                pageSlide.style.transform = "translateX("+ translated +"%)";

            }
        }
        slideIndex++;
        if (slideIndex >= idPages.length) {slideIndex = 0}
        if(slideIndex < idPages.length){
            var current = document.getElementsByClassName("cur-page-active");
            var currentnext = document.getElementsByClassName("cur-page");
            let translated = tsl * slideIndex;
            pageSlide.style.transform = "translateX("+ translated +"%)";
            current[0].className = current[0].className.replace("cur-page-active","");
            currentnext[slideIndex].classList.add("cur-page-active");


        }
        else{
            i = 0;
            return i;
        }
        setTimeout(showSlides, 5000);
}