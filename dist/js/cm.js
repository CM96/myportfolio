

const background_class=document.querySelector('#navigation__background');
const link=document.querySelectorAll('.navigation__link');
const icon=document.querySelector('.navigation__button');

//MAKE THE BUTTON CLOSE THE OR OPEN THE NAVIGATION
icon.addEventListener('click',(event)=>{
        background_class.classList.toggle('toggle');
        document.querySelector('.navigation__icon').classList.toggle('animate');
        document.querySelector('.navigation__nav').classList.toggle('appear'); 

});
// MAKE EACH LINK CLOSE THE NAVIGATION
link.forEach((lien)=>{
        lien.addEventListener('click', (event)=>{
                
                background_class.classList.toggle('toggle');
                document.querySelector('.navigation__icon').classList.toggle('animate');
                document.querySelector('.navigation__nav').classList.toggle('appear');
        });
});

//smooth scrool animation
var scroll = new SmoothScroll('.navigation__item a[href*="#"]', {
	speed: 600
});

// // Location time later
// var time=new Date();
// var hours=time.getHours();
// var minutes=time.getMinutes();
// var seconds=time.getSeconds();
