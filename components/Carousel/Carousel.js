
class Carousel {
    constructor(element) {
   this.element = element;
   this.slideData = this.element.dataset.tab;
   
    this.lButton = this.element.querySelector('.left-button');
    this.rButton = this.element.querySelector('.right-button');
    

   if(this.slideData === '1'){
       this.slides = document.querySelectorAll('.slide');
   } else {
    this.slides = this.box.querySelectorAll(`.slide[data-tab="${this.slideData}"`);
   }

   this.slides = Array.from(this.slides).map( slide => new Slide(slide));

   
   this.index = 0;
   this.current = this.slides[0];


   this.rButton.addEventListener('click', () => {
       this.nav(1)
   });

   this.lButton.addEventListener('click', () => {
       this.nav(-1)
   })

}

    nav(direction){
        const slides = document.querySelectorAll('.slide');

        slides.forEach(slide => slide.style.display = 'none');

        // use index to call showSlide on next/previous slide
    }


}

class Slide {
    constructor(element) {
        this.element = element;
    }

    showSlide() {
        this.element.display = "block";
    }
}


let carousel = document.querySelector('.carousel');

carousel = Array.from(carousel).map( item => new Carousel(item));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/