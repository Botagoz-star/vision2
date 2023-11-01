
const tabs = document.querySelectorAll(".tab");
const articles = document.querySelectorAll("article");
for (let i = 0; i < tabs.length; i++) {
  
   tabs[i].addEventListener("click", function (event) {
  const currentTab=event.target;
  currentTab.classList.add("active");
   for (let i=0; i<tabs.length; i++){
    if (tabs[i]!==currentTab){
        tabs[i].classList.remove("active");
    }
}
for(let j=0; j<articles.length; j++){
    if (currentTab.innerText.toLowerCase().includes(articles[j].id)){
        articles[j].style.display="block";
    } else {
        articles[j].style.display = "none";
    }
}
    });
    }
   
