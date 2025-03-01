const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".image");

let slideNumber = 1; // in statring value of slide is 1 and img 1 is showing
const length = images.length; // storing images.length in (length variable)

// create a function for nxt slide.....
const nextSlide = () => { //fun for right arrow
  slider.style.transform = `translateX(-${slideNumber * 800}px)`; //then add css style->property(transform)...size of img(width =800px)..so multiply slidenumber with 800px..then img will change
  slideNumber++;
};

const prevSlide = () => { //fun for left arrow
    slider.style.transform = `translateX(-${(slideNumber - 2) * 800}px)`; // slideNumber - 2*800 mean 1 slide back
    slideNumber--;
  };

// for returning in 1st slide
const getFirstSlide = () => { //for right arrow
  slider.style.transform = `translateX(0px)`; //when it goes on last img...then 0px change...mean 1st img
  slideNumber = 1;
};

// for go back on last slide
const getLastSlide = () => { //for left arrow
    slider.style.transform = `translateX(-${(length - 1)*800}px)`; //mean total length - 1 *800 mean back 1 slide
    slideNumber = length; //it will go back to total length mean length of slide
  };

right.addEventListener("click", () => { //then add eventlistener in right arrow
    if (slideNumber < length) { // condition --> slideNumber value is always less then all-img's length(in number)
        nextSlide();
    } else {
        getFirstSlide();
    }
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
});