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
      let price = `<h7> 125.00 x` + numberOfProduct + `=`+ numberOfProduct*125+`</h7>`
      document.getElementById("price").innerHTML = price
      document.getElementById("cartitems").style.display = "block";
      document.getElementById("cartitems").innerHTML = numberOfProduct;
  
      }


  }

 function displaycart()
 {
  document.getElementById("cartUI").style.display = "block";

 }

 $("#slider").on("click", function() {
  $('#imagepreview').attr('src', $('#pop').attr('src')); // here asign the image to the modal when the user click the enlarge link
  $('#imagemodal').modal('show'); // imagemodal is the id attribute assigned to the bootstrap modal, then i use the show function
});