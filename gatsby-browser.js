exports.onRouteUpdate = ({ location }) => {
  if (location.pathname === "" || location.pathname === "/") {
    const targetElement = document.querySelectorAll(".post-link");
    //console.log(targetElement);
    document.addEventListener("scroll", function () {
      //console.log(targetElement);
      for (let i = 0; i < targetElement.length; i++) {
        const getElementDistance = targetElement[i].getBoundingClientRect().top + targetElement[i].clientHeight * 0.6;
        //console.log(getElementDistance);
        if (window.innerHeight > getElementDistance) { //window.innerHeightは現在のウィンドウの高さ　
          targetElement[i].classList.add("show");
        }
      }
    })

    //ArrowHide
    const arrowElement = document.querySelector(".arrow-icon");
    //console.log(arrowElement);
    document.addEventListener("scroll", function () {
      const getArrowElementDistance = arrowElement.getBoundingClientRect().top;
      var result = arrowElement.classList.contains("hide");
      //console.log(getArrowElementDistance);
      if (250 < getArrowElementDistance && result) {
        //console.log("非表示");
        arrowElement.classList.remove("hide");
      } else if (250 > getArrowElementDistance) {
        arrowElement.classList.add("hide");
      }
    })
  }
};

// exports.onInitialClientRender = () => {
//   // console.log("表示されました");
//   const openingElement = document.querySelector();
// };