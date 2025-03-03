const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".image");

let slideNumber = 1; // in statring value of slide is 1 and img 1 is showing
const length = images.length; // storing images.length in (length variable)


// Function to get image width based on screen size
const getImageWidth = () => {
  if (window.innerWidth <= 480) return 350; // Small Phones
  if (window.innerWidth <= 768) return 500; // Tablets
  if (window.innerWidth <= 1024) return 650; // Medium Screens
  return 800; // Default for Desktop
};

// creating dot btn with js dom
const button = document.querySelector(".button");
for(let i = 0; i<length; i++){
  const div = document.createElement("div");
  div.className = "btn";
  button.appendChild(div); //mean button div ke ander chid div bnega btn naam(class) ka
}

const btns = document.querySelectorAll(".btn");

btns[0].style.backgroundColor = "white";

// bgcolor on btn
const resetBg = () => {
  btns.forEach((btn) =>{
    btn.style.backgroundColor = "transparent";
  })
}

// on clicking dot btn
btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    resetBg();
    slider.style.transform = `translateX(-${i*800}px)`;
    slideNumber = i+1; //conecting both dot-btn and arrow
    btn.style.backgroundColor = "white";
  });
});


const changeColor = () => {
  resetBg();
  btns[slideNumber - 1].style.backgroundColor = "white";
}; //this function is for connecting arrow and dots

// this is for arrow btn...
// create a function for nxt slide.....
const nextSlide = () => { //fun for right arrow
  const imgWidth = getImageWidth(); // Get width dynamically
  // slider.style.transform = `translateX(-${slideNumber * 800}px)`; //then add css style->property(transform)...size of img(width =800px)..so multiply slidenumber with 800px..then img will change
  slider.style.transform = `translateX(-${slideNumber * imgWidth}px)`;
  slideNumber++;
};

const prevSlide = () => { //fun for left arrow
  const imgWidth = getImageWidth(); // Get width dynamically
    // slider.style.transform = `translateX(-${(slideNumber - 2) * 800}px)`; // slideNumber - 2*800 mean 1 slide back
    slider.style.transform = `translateX(-${(slideNumber - 2) * imgWidth}px)`;
    slideNumber--;
  };

// for returning in 1st slide
const getFirstSlide = () => { //for right arrow
  // const imgWidth = getImageWidth(); // Get width dynamically
  slider.style.transform = `translateX(0px)`; //when it goes on last img...then 0px change...mean 1st img
  slideNumber = 1;
};

// for go back on last slide
const getLastSlide = () => { //for left arrow
  const imgWidth = getImageWidth(); // Get width dynamically
    // slider.style.transform = `translateX(-${(length - 1)*800}px)`; //mean total length - 1 *800 mean back 1 slide
    slider.style.transform = `translateX(-${(length - 1) * imgWidth}px)`;
    slideNumber = length; //it will go back to total length mean length of slide
  };

right.addEventListener("click", () => { //then add eventlistener in right arrow
    if (slideNumber < length) { // condition --> slideNumber value is always less then all-img's length(in number)
        nextSlide();
    } else {
        getFirstSlide();
    }
    changeColor();
});
// also write this with the help of terninary operator like
// right.addEventListener("click", () => {
//   slideNumber < length ? nextSlide() : getFirstSlide();
// });

left.addEventListener("click", () => { 
    if (slideNumber > 1) { //when slide number greater then 1
       prevSlide();
    } else {
        getLastSlide();
    }
    changeColor();
});


