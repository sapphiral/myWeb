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

var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
// Only change code below this line
    var x = "";
    for (i==0; i<contacts.length; i++) {
    	if (contacts.firstName == name) {
    		console.log("have")
    	}

// Only change code above this line
};

lookUpProfile("Akira", "likes");