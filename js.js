console.log("hello world");
const x=document.getElementById("toggle");
// console.log(x);
x.addEventListener("click", ()=> {
	let x=document.getElementById("toggled");
	x.classList.toggle("toggled");
});

const toggle=document.querySelector(".toggle"),
			ul=document.querySelector("header ul"),
			offsetD=ul.offsetTop;

window.addEventListener("scroll", () => {
		(window.pageYOffset>offsetD) ? 
		(ul.classList.add("sticky")) :
		(ul.classList.remove("sticky"))
});


function functionA(n) {
	var index=n-1;
	var img=document.getElementsByClassName("page");
	
	for (i=0; i<img.length; i++) {
		img[i].style.display="none";
	};
	
	img[index].style.display="block";
};

functionA(1);
