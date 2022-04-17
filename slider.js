// making thumbnails move
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

// cart stuff
let numberOfProduct = 0;
  function decrement() {
    numberOfProduct--;
    if (numberOfProduct < 0) {
        let numberOfProduct = 0; }
    document.getElementById("numberOfProduct").innerHTML = numberOfProduct;
  }
  
  function increment() {
    numberOfProduct++;
    document.getElementById("numberOfProduct").innerHTML = numberOfProduct;
  }
  
  function showItems() {
    var items = document.getElementById("cartUI");
  
    if (items.style.display === "none") {
        items.style.display = "block";
      showCart = true;
    } else {
        items.style.display = "none";
      showCart = true;
    }
  }
  
  function addToCart() {
    if (numberOfProduct !== 0) {
//add to cart
      }

  }
