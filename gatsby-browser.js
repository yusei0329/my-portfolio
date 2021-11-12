exports.onRouteUpdate = ({ location }) => {
  if (location.pathname === "" || location.pathname === "/") {
    const targetElement = document.querySelectorAll(".post-link");
    //console.log(targetElement);
    document.addEventListener("scroll", function() {
      //console.log(targetElement);
      for(let i = 0; i < targetElement.length; i++){
        const getElementDistance = targetElement[i].getBoundingClientRect().top + targetElement[i].clientHeight * 0.6;
        //console.log(getElementDistance);
        if(window.innerHeight > getElementDistance){ //window.innerHeightは現在のウィンドウの高さ　
          targetElement[i].classList.add("show");
        }
      }
    }) 
  }
};