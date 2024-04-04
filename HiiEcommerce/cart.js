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
 //show scroll back to top
 window.addEventListener("scroll", ()=>{
  let toTop = document.querySelector(".to-top");
  if(window.scrollY > 150 ){
    toTop.style.opacity = "1";
  }else{
    toTop.style.opacity = "0";
  }
 });


 //get all item save to local storage
 
const allItems = Object.keys(localStorage).map(key => JSON.parse(localStorage.getItem(key)));


const tableBody = document.getElementById("table-body");

allItems.forEach(cartItem =>{
  cartItem.forEach(item =>{

    const tableRow = document.createElement('tr');

    const imgCell = document.createElement('td');
    const productImg = document.createElement('img');
    productImg.src = item.cartedImg;
    productImg.alt = item.cartedName;
    imgCell.appendChild(productImg);
    tableRow.appendChild(imgCell);

    const nameCell = document.createElement('td');
    nameCell.textContent = item.cartedName;
    tableRow.appendChild(nameCell);

    const priceCell = document.createElement('td');
    priceCell.textContent = item.cartedPrice;
    tableRow.appendChild(priceCell);

    tableBody.appendChild(tableRow);
  })
})