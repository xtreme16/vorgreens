let menus = document.querySelectorAll(".menu-section-tittle .tittle-click ");

for (let tittle of menus) {
  tittle.addEventListener('click', (e) => {
    
    const et = e.target;
    
    const active = document.querySelector(".active");

    if (active) {
      active.classList.remove("active");
      
    }
    et.classList.add("active");

    let Content = document.querySelectorAll('.cards-of-menu');

    
    for (let cards of Content) {
      if(cards.getAttribute('data-card') === tittle.getAttribute('data-card')) {
        cards.style.display = "flex";
       
       }else {
        cards.style.display = "none";
        
       }
     }
  });
}

