console.log("hello world");
const x=document.getElementById("toggle");
x.addEventListener("click", ()=> {
	let x=document.getElementById("toggled");
	x.classList.toggle("toggled");
});

/* UL LIST DROPDOWN */

const toggle=document.querySelector(".toggle"),
			ul=document.querySelector("header ul"),
			offsetD=ul.offsetTop;

window.addEventListener("scroll", () => {
		(window.pageYOffset>offsetD) ? 
		(ul.classList.add("sticky")) :
		(ul.classList.remove("sticky"))
});

/* PAGINATION */

const dot = document.getElementsByClassName("dot");
const img=document.getElementsByClassName("page");
const prev= document.getElementsByClassName("prev")[0];
const next= document.getElementsByClassName("next")[0];

prev.addEventListener("click", ()=>{functionC(-1)});
next.addEventListener("click", ()=>{functionC(1)});

var slideIndex=1;
var timeoutCollection=[];

for (let i=0; i<dot.length; i++) {
	dot[i].addEventListener("click", ()=>{
		functionB(i+1);
		});
};
function functionC(n) {
	functionA(slideIndex+=n);
};

function functionB(n) {
	functionA(n);
};

function functionA(n) {
	slideIndex=n;
	
	if (n>img.length) {slideIndex=1};
	if (n<1) {slideIndex=img.length};
	for (i=0; i<img.length; i++) {
		img[i].style.display="none";
		dot[i].classList.remove("active");
	};
	img[slideIndex-1].style.display="block";
	dot[slideIndex-1].classList.add("active");
	clearTimeout(timeoutCollection.pop());
	interval=setTimeout(()=>{functionC(1)},4000);
	timeoutCollection.push(interval);
};



functionA(1);
// /* END PAGINATION */
// window.setTimeout(functionC(1),5000);
