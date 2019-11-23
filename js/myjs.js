function Flipping() {
    let next = document.getElementById("next");
    let past = document.getElementById("past");
    let sections = document.querySelectorAll(".flipping-form");
   sections[1].style.display="none";

    next.onclick=function () {
        sections[0].style.display="none";
        sections[1].style.display="";
    }
    past.onclick=function () {
        sections[0].style.display="";
        sections[1].style.display="none";
    }
}

Flipping();

