let thumbnails = document.getElementsByClassName('thumbnail')

let activeImages = document.getElementsByClassName('active')

for (var i=0; i < thumbnails.length; i++){

    thumbnails[i].addEventListener('mouseover', function(){
        console.log(activeImages)
        
        if (activeImages.length > 0){
            activeImages[0].classList.remove('active')
        }
        
        this.classList.add('active')
        document.getElementById('featured').src = this.src
    })
}

// Nav Menu Toggle
const navMenuBtnEl = document.querySelector('.nav--menu');
const mdNavEl = document.querySelector('.md-nav');
const mdNavOverlay = document.querySelector('.md-nav-overlay');

navMenuBtnEl.addEventListener('click', () => {
    mdNavEl.classList.toggle('hidden');
    mdNavOverlay.classList.toggle('hidden');

    mdNavEl.classList.toggle('active');
    mdNavOverlay.classList.toggle('active');
})

closeMenuBtn.addEventListener('click', () => {

    mdNavEl.classList.toggle('hidden');
    mdNavOverlay.classList.toggle('hidden');

    mdNavEl.classList.toggle('active');
    mdNavOverlay.classList.toggle('active');

    
})

mdNavOverlay.addEventListener('click', () => {
    mdNavEl.classList.toggle('hidden');
    mdNavOverlay.classList.toggle('hidden');

    mdNavEl.classList.toggle('active');
    mdNavOverlay.classList.toggle('active');
})
// Cart Toggle Event
const cartBtn = document.querySelector('.nav--cart');