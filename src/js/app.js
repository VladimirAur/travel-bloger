document.addEventListener('DOMContentLoaded', () => {
// slider();
mySlider();
});


// Slider
function slider(){

    const slides = document.querySelectorAll('.slider__item');    
    const slidesField = document.querySelector('.slider__content');
    const prev = document.querySelector('.slider__prev');
    const next = document.querySelector('.slider__next');
    const width = window.getComputedStyle(slidesField).width; 
    
    const socials = document.querySelectorAll('.social');
    
    let slideIndex = 0;
    let offset = 0;

        
    if(localStorage.getItem('number')){
        slideIndex = localStorage.getItem('number');
    }else{
        slideIndex = 0;
    }
    
        
    slidesField.style.width = 70 * slides.length + '%';
    
    function toggleHeigth(){
        const height = window.getComputedStyle(slidesField).height;
        slidesField.style.height = height;
    };
    
    function sliderInit(){
        offset = +width.slice(0, width.length - 2) * slideIndex;
        slidesField.style.transform = `translateX(-${offset}px)`;
    }
    
    function addActiveClass(current){
        slides.forEach(slide => {
            slide.classList.remove('slider__item--active');
        });       
        slides[current].classList.add('slider__item--active');        
    };

    function addInactiveClass(current){
        socials.forEach(social => {
            social.classList.add('social--none');
        });       
        socials[current].classList.remove('social--none');        
    };
    
    next.addEventListener('click', () => { 
        toggleHeigth(); 
    
        if(offset === +width.slice(0, width.length - 2) * (slides.length - 1)){
            offset = 0;        
        }else{
            offset += +width.slice(0, width.length - 2);
                    
        }
        if(slideIndex == slides.length - 1){
            slideIndex = 0;            
        }else{
            slideIndex++;                    
        }

                      
        slidesField.style.transform = `translateX(-${offset}px)`;        
        
        addActiveClass(slideIndex);
        addInactiveClass(slideIndex);
        localStorage.setItem('number', slideIndex);
        
    });
    
    prev.addEventListener('click', () => {
        toggleHeigth();
    
        if(offset == 0){            
            offset = +width.slice(0, width.length - 2) * (slides.length - 1);
        }else{
            offset += -width.slice(0, width.length - 2);
        }
    
        if(slideIndex == 0){
            slideIndex = slides.length - 1;
        }else{
            slideIndex--;
        }
        
        slidesField.style.transform = `translateX(-${offset}px)`;

        addActiveClass(slideIndex);
        addInactiveClass(slideIndex);
        localStorage.setItem('number', slideIndex);
    });
    
    sliderInit();
    addActiveClass(slideIndex);
    addInactiveClass(slideIndex);    
    };  // __{slider}


    function mySlider() {
        const slides = document.querySelectorAll('.slider__item');    
        const slidesField = document.querySelector('.slider__content');
        const prev = document.querySelector('.slider__prev');
        const next = document.querySelector('.slider__next');
        const width = window.getComputedStyle(slidesField).width; 

        
        slides[0].classList.add('slider__item--active');
        slides[1].classList.add('slider__item--pasive');

        next.addEventListener('click', () => {
            
        });
    }