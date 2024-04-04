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
});
// search bar
const searchBtn = document.getElementById("search-btn");
let searchContainer = document.getElementById("search-Con");
searchBtn.addEventListener("click", ()=>{
  searchContainer.classList.toggle("active");
})
document.getElementById("close-search").addEventListener("click", ()=>{
  searchContainer.classList.remove("active");
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
 //price rang
 const rangeInput = document.querySelector(".rangeInput");
 const rangrPrice = document.querySelector(".rangrPrice");
 rangeInput.oninput = (()=>{
  let rangeValue = rangeInput.value;
  rangrPrice.textContent = rangeValue;
  rangrPrice.style.left = (rangeValue/2) + "%";
 })
//pagination***************************/
const paginationItemContainer = document.querySelector(".main-item-wrappet-two-item-container");
const paginationButton = document.querySelectorAll(".Pages");
const nextPagination = document.querySelector(".nextPages");
const prevPagination = document.querySelector(".prevPages");
const divsPerPage = 9;
let currentPaginationPage = 1;


function showPaginationPage(page){
  const paginationStartIndex = (page - 1) * divsPerPage;
  const paginationEndIndex = paginationStartIndex + divsPerPage;
  const containerItems = paginationItemContainer.querySelectorAll(".item-filter-food");

  containerItems.forEach((containerItem, index)=>{
    if(index >= paginationStartIndex && index < paginationEndIndex){
      containerItem.style.display = "block";
    } else{
      containerItem.style.display = "none";
    }
  });
}

function setActiveButton(page){
  paginationButton.forEach(button =>{
    if(parseInt(button.textContent) === page){
      button.classList.add("activePagination");
    }else{
      button.classList.remove("activePagination");
    }
  });
}

function goToPaginationPage(page){
  currentPaginationPage = page;
  showPaginationPage(currentPaginationPage);
  setActiveButton(currentPaginationPage);
}

prevPagination.addEventListener("click",()=>{
  if(currentPaginationPage > 1){
    goToPaginationPage(currentPaginationPage - 1);
  }
});
nextPagination.addEventListener("click", ()=>{
  if(currentPaginationPage < paginationButton.length){
    goToPaginationPage(currentPaginationPage + 1);
  }
});

paginationButton.forEach(button =>{
  button.addEventListener("click", ()=>{
    const page = parseInt(button.textContent);
    goToPaginationPage(page);
  });
});
showPaginationPage(currentPaginationPage);
setActiveButton(currentPaginationPage);
