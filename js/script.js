const toggeler=document.querySelector('.mobile-menu-list');
const actvie=document.querySelector('.hamburger-menu');

actvie.addEventListener('click',function(){
    toggeler.classList.toggle('active');
});


document.addEventListener('DOMContentLoaded',function(){
    

    window.addEventListener('scroll',function(){
        const nav=document.querySelector('.navbar');
            if(window.scrollY>0){
                nav.classList.add('scroll');
            }
            else{
                nav.classList.remove('scroll');
            }
    });

});