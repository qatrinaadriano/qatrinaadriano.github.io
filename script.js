const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll("#main-artwork i");

let isDragStart = false, prevPageX, prevScrollLeft;
let firstImgWidth = firstImg.clientWidth + 14; //getting first img width & adding 14 margin value
let scrollWidth = carousel.scrollWidth - carousel.clientWidth;

const showHideIcons = () => {
	arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
	arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon => {
	icon.addEventListener("click", () => {
		carousel.scrollLeft += icon.id == "top" ? -firstImgWidth : firstImgWidth;
		setTimeout(() => showHideIcons(), 60); //calling showHideIcons after 60ms
	});




});



