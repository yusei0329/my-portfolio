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

    // //オープニングイベント
    // exports.onInitialClientRender = () => {
    //   // console.log("表示されました");
    //   const openingElement = document.querySelector(".shutter");
    //   const openingTitleElement = document.querySelector(".title-logo");
    //   const openingFirstElement = document.querySelector(".first-time");
    //   openingElement.classList.add("show");
    //   openingTitleElement.classList.add("show");
    //   openingFirstElement.classList.add("show");

    //   ban_scroll();
    //   window.setTimeout(function () {
    //     openingElement.classList.remove("show");
    //     openingTitleElement.classList.remove("show");
    //     openingFirstElement.classList.remove("show");
    //     go_scroll();
    //   }, 2000);

    //   // スクロール禁止
    //   function ban_scroll() {
    //     // PC用
    //     document.addEventListener("wheel", notscroll, { passive: false });
    //     // スマホ用
    //     document.addEventListener("touchmove", notscroll, { passive: false });
    //   }
    //   // スクロール禁止解除
    //   function go_scroll() {
    //     // PC用
    //     document.removeEventListener("wheel", notscroll, { passive: false });
    //     // スマホ用
    //     document.removeEventListener("touchmove", notscroll, { passive: false });
    //   }
    //   // スクロール禁止関数
    //   function notscroll(e) {
    //     e.preventDefault();
    //   }
    // };
  }
};

