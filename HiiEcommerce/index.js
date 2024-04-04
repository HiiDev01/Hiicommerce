//hamburger
const hamburger = document.querySelector(".hamburger");
const minNav = document.querySelector(".min-nav");

hamburger.addEventListener("click", ()=>{
  hamburger.classList.toggle("active");
  minNav.classList.toggle("active");
});
document.querySelectorAll(".closeNav").forEach(n => n.addEventListener("click", ()=>{
  hamburger.classList.remove("active");
  minNav.classList.remove("active");
}));
//animation nav

window.addEventListener("scroll", ()=>{
  let header = document.querySelector("header");
  if(window.scrollY > 150 && window.innerWidth > 1050){
    header.classList.add("active");
  }else{
    header.classList.remove("active");
  }
})
// search bar
const searchBtn = document.getElementById("search-btn");
let searchContainer = document.getElementById("search-Con");
searchBtn.addEventListener("click", ()=>{
  searchContainer.classList.toggle("active");
})
document.getElementById("close-search").addEventListener("click", ()=>{
  searchContainer.classList.remove("active");
})
//carousel
const carouselContainer = document.querySelector(".carousel-container");
const carouselItem = document.querySelectorAll(".carousel-item");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

let currentIndex = 0;
const slideWidth = carouselItem[0].offsetWidth;
const totalSlide = carouselItem.length;

function goToSlide(index){
  carouselContainer.style.transform = `translateX(-${index * slideWidth}px)`;
  currentIndex = index;
}

function nextSlide(){
  if(currentIndex < totalSlide - 1){
    goToSlide(currentIndex + 1);
  }else{
    goToSlide(0);
  }
}
function prevSlide(){
  if(currentIndex > 0){
    goToSlide(currentIndex - 1);
  }else{
    goToSlide(totalSlide - 1);
  }
}
 
 let autoplayInterval;

 function startAutoPlay(){
  autoplayInterval = setInterval(nextSlide, 3000)
 }

 function stopAutoPlay(){
  clearInterval(autoplayInterval);
 }
 startAutoPlay();

 carouselContainer.addEventListener("mouseenter", stopAutoPlay);
 carouselContainer.addEventListener("mouseleave", startAutoPlay);
 nextBtn.addEventListener("mouseenter", stopAutoPlay);
 nextBtn.addEventListener("mouseleave", startAutoPlay);
 prevBtn.addEventListener("mouseenter", stopAutoPlay);
 prevBtn.addEventListener("mouseleave", startAutoPlay);


 nextBtn.addEventListener("click", nextSlide);
 prevBtn.addEventListener("click", prevSlide);
 ////food filter
 const itemFilterBtn = document.querySelectorAll(".item-filter-btn");
 const itemFilterFood = document.querySelectorAll(".item-filter-food");

 itemFilterBtn.forEach((items)=>{
  items.addEventListener("click", ()=>{
    itemFilterBtn.forEach((item)=> item.classList.remove("active-filter-btn"));
    items.classList.add("active-filter-btn");

    const filterItems = items.getAttribute("data-filter");

    itemFilterFood.forEach((food)=>{
      if(filterItems === "All" || food.classList.contains(filterItems)){
        food.style.display = "block";
      }else{
        food.style.display = "none";
      }
    });
  });
 });
 //show scroll back to top
 window.addEventListener("scroll", ()=>{
  let toTop = document.querySelector(".to-top");
  if(window.scrollY > 150 ){
    toTop.style.opacity = "1";
  }else{
    toTop.style.opacity = "0";
  }
 });

 //adding item to cart and saving them to local storage
 document.addEventListener('DOMContentLoaded',function(){
  const addToCartButtons = document.querySelectorAll(".add-to-cart");

  addToCartButtons.forEach(cartButtons =>{
    cartButtons.addEventListener('click', function(){
      const cartItemContainer = cartButtons.closest(".shop-product");
      const imageSrc = cartItemContainer.querySelector('img').src;
      const itemName = cartItemContainer.querySelector('h2').textContent;
      const itemPrice = cartItemContainer.querySelector('.price').textContent;

      const ItemCarted = {
        cartedImg: imageSrc,
        cartedName: itemName,
        cartedPrice: itemPrice
      }
      localStorage.setItem('itemCarted',JSON.stringify(ItemCarted));
      console.log(localStorage);
    });
  });
});
