document.addEventListener("DOMContentLoaded", function () {
  const mediaQuery = window.matchMedia("only screen and (max-width: 600px)");

  let circlBackground = document.querySelector(".circl-background");
  let circl2 = document.querySelector(".top");
  let circl1 = document.querySelector(".active");
  let circl3 = document.querySelector(".left");
  let sliderText1 = document.querySelector(".slider-text1");
  let sliderText2 = document.querySelector(".slider-text2");
  let sliderText3 = document.querySelector(".slider-text3");
  let sliderImages1 = document.querySelector(".slider-images1");
  let sliderImages2 = document.querySelector(".slider-images2");
  let sliderImages3 = document.querySelector(".slider-images3");
  let rotate = 0;

  // scroll

  let screenHeight = window.screen.height;
  const aboutContainer = document.querySelector(".aboutContainer");
  const aboutBackground = document.querySelector(".aboutBackground");
  const about = document.querySelector(".about");
  const stickyContainer = document.querySelector(".stickyContainer");
  const fadeBackground = document.querySelector(".fadeWrapperBackground");
  const fadeWrapper = document.querySelector(".fadeWrapper");
  const taxesImages = document.querySelector(".taxesImages");

  window.onscroll = function () {
    var scrollTop = window.pageYOffset
      ? window.pageYOffset
      : document.documentElement.scrollTop
      ? document.documentElement.scrollTop
      : document.body.scrollTop;
    if (scrollTop >= screenHeight * 1.5) {
      aboutContainer.classList.add("step1");
      aboutBackground.classList.add("step1");
    } else {
      aboutContainer.classList.remove("step1");
      aboutBackground.classList.remove("step1");
    }
    if (scrollTop >= screenHeight * 2) {
      aboutBackground.classList.add("step2");
      about.classList.add("step2");

      setTimeout(() => {
        fadeWrapper.classList.add("step2");
      }, 10);
    } else {
      about.classList.remove("step2");
      fadeWrapper.classList.remove("step2");
      aboutBackground.classList.remove("step2");
    }
    if (scrollTop >= screenHeight * 2.5) {
      stickyContainer.classList.add("step3");
    } else {
      stickyContainer.classList.remove("step3");
    }
    if (scrollTop >= screenHeight * 3) {
      stickyContainer.classList.add("step4");
      texesNav[0].classList.add("active");
    } else {
      stickyContainer.classList.remove("step4");
      texesNav[0].classList.add("active");
    }
    if (scrollTop >= screenHeight * 3.5) {
      taxesImages.classList.add("step5");
      fadeBackground.classList.add("step5");
      texesNav[1].classList.add("active");
      for (let i = 0; i < texesNav.length; i++) {
        if (i !== 1) {
          texesNav[i].classList.remove("active");
        }
      }
    } else {
      taxesImages.classList.remove("step5");
      fadeBackground.classList.remove("step5");
      texesNav[1].classList.remove("active");
    }
    if (scrollTop >= screenHeight * 4) {
      taxesImages.classList.add("step6");
      fadeBackground.classList.add("step6");
      texesNav[2].classList.add("active");
      for (let i = 0; i < texesNav.length; i++) {
        if (i !== 2) {
          texesNav[i].classList.remove("active");
        }
      }
    } else {
      taxesImages.classList.remove("step6");
      fadeBackground.classList.remove("step6");
      texesNav[2].classList.remove("active");
    }
    if (scrollTop >= screenHeight * 4.5) {
        taxesImages.classList.add("step7");
      fadeBackground.classList.add("step7");
      texesNav[3].classList.add("active");
      for (let i = 0; i < texesNav.length; i++) {
        if (i !== 3) {
          texesNav[i].classList.remove("active");
        }
      }
    } else {
        taxesImages.classList.remove("step7");
      fadeBackground.classList.remove("step7");
      texesNav[3].classList.remove("active");
    }
  };
  const texesNav = document.querySelectorAll(".navigationItem");

  texesNav.forEach((item, index) => {
    item.addEventListener("click", function () {
      // Добавляем класс Active текущему элементу
      this.classList.add("active");

      // Удаляем класс Active у всех остальных элементов
      texesNav.forEach((otherItem) => {
        if (otherItem !== this) {
          otherItem.classList.remove("active");
        }
      });

      // Устанавливаем координаты для прокрутки
      let scrollPosition;
      switch (index) {
        case 0:
          scrollPosition = screenHeight * 3;
          break;
        case 1:
          scrollPosition = screenHeight * 3.5;
          break;
        case 2:
          scrollPosition = screenHeight * 4;
          break;
        case 3:
          scrollPosition = screenHeight * 4.5;
          break;
        default:
          scrollPosition = 0; // Если index выходит за пределы, прокручиваем в начало
      }

      // Прокручиваем страницу по указанным координатам
      window.scrollTo(0, scrollPosition);
    });
  });

  circl2.onclick = function () {
    sliderText2.classList.add("active");
    sliderText1.classList.remove("active");
    sliderText3.classList.remove("active");
    sliderImages2.classList.add("active");
    sliderImages1.classList.remove("active");
    sliderImages3.classList.remove("active");
    if (this.classList.contains("top")) {
      if (mediaQuery.matches) {
        rotateMinus();
      } else {
        rotatePlus();
      }
      this.classList.replace("top", "active");
      circl1.classList.replace("active", "left");
      circl3.classList.replace("left", "top");
    } else if (this.classList.contains("left")) {
      if (mediaQuery.matches) {
        rotatePlus();
      } else {
        rotateMinus();
      }
      this.classList.replace("left", "active");
      circl3.classList.replace("active", "top");
      circl1.classList.replace("top", "left");
    }
  };
  circl1.onclick = function () {
    sliderText1.classList.add("active");
    sliderText2.classList.remove("active");
    sliderText3.classList.remove("active");
    sliderImages1.classList.add("active");
    sliderImages2.classList.remove("active");
    sliderImages3.classList.remove("active");
    if (this.classList.contains("left")) {
      if (mediaQuery.matches) {
        rotatePlus();
      } else {
        rotateMinus();
      }
      this.classList.replace("left", "active");
      circl2.classList.replace("active", "top");
      circl3.classList.replace("top", "left");
    } else if (this.classList.contains("top")) {
      if (mediaQuery.matches) {
        rotateMinus();
      } else {
        rotatePlus();
      }
      this.classList.replace("top", "active");
      circl2.classList.replace("left", "top");
      circl3.classList.replace("active", "left");
    }
  };
  circl3.onclick = function () {
    sliderText3.classList.add("active");
    sliderText2.classList.remove("active");
    sliderText1.classList.remove("active");
    sliderImages3.classList.add("active");
    sliderImages2.classList.remove("active");
    sliderImages1.classList.remove("active");
    if (this.classList.contains("left")) {
      if (mediaQuery.matches) {
        rotatePlus();
      } else {
        rotateMinus();
      }
      this.classList.replace("left", "active");
      circl2.classList.replace("top", "left");
      circl1.classList.replace("active", "top");
    } else if (this.classList.contains("top")) {
      if (mediaQuery.matches) {
        rotateMinus();
      } else {
        rotatePlus();
      }
      this.classList.replace("top", "active");
      circl2.classList.replace("active", "left");
      circl1.classList.replace("left", "top");
    }
  };

  function rotatePlus() {
    rotate = rotate + 120;
    circlBackground.style.transform = `rotate(${rotate}deg)`;
  }
  function rotateMinus() {
    rotate = rotate - 120;
    circlBackground.style.transform = `rotate(${rotate}deg)`;
  }

  // slider
  let slides = document.querySelectorAll(".slide");
  let buttonNext = document.querySelector(".next");
  let buttonPrev = document.querySelector(".prev");
  let getDescription = document.querySelectorAll(".getDescription");

  function nextSlide() {
    buttonPrev.classList.remove("active");
    for (let i = 0; i < slides.length; i++) {
      if (i == slides.length - 2) {
        buttonNext.classList.add("active");
      }
      if (
        slides[i].classList.contains("active") &&
        slides[i].nextElementSibling
      ) {
        getDescription[i + 1].classList.add("active");
        getDescription[i].classList.remove("active");
        slides[i + 1].classList.replace("centr", "active");
        slides[i].classList.replace("active", "_none");
        if (slides[i + 2]) {
          slides[i + 2].classList.replace("left", "centr");
        }
        if (slides[i + 3]) {
          slides[i + 3].classList.add("left");
          slides[i + 3].classList.remove("none-reverce");
        }
        if (slides[i - 1]) {
          slides[i - 1].classList.remove("centr");
        }
        break;
      }
    }
  }

  function prevSlide() {
    buttonNext.classList.remove("active");
    for (let i = 0; i < slides.length; i++) {
      if (
        slides[i].classList.contains("active") &&
        slides[i].previousElementSibling
      ) {
        if (slides[i - 1]) {
          getDescription[i].classList.remove("active");
          getDescription[i - 1].classList.add("active");
          slides[i - 1].classList.replace("_none", "active");
          slides[i].classList.replace("active", "centr");

          if (slides[i + 1]) {
            slides[i + 1].classList.replace("centr", "left");
          }
          if (slides[i + 2]) {
            slides[i + 2].classList.replace("left", "none-reverce");
          }
        }
        if (i == 1) {
          buttonPrev.classList.add("active");
        }
        break;
      }
    }
  }

  buttonPrev.addEventListener("click", prevSlide);
  buttonNext.addEventListener("click", nextSlide);

  const canvas1 = document.getElementById("c1");

  // Вешаем на прикосновение функцию handleTouchStart
  canvas1.addEventListener("touchstart", handleTouchStart, false);
  // А на движение пальцем по экрану - handleTouchMove
  canvas1.addEventListener("touchmove", handleTouchMove, false);

  let xDown = null;
  let yDown = null;

  function handleTouchStart(evt) {
    xDown = evt.touches[0].clientX;
    yDown = evt.touches[0].clientY;
  }

  function handleTouchMove(evt) {
    if (!xDown || !yDown) {
      return;
    }

    let xUp = evt.touches[0].clientX;
    let yUp = evt.touches[0].clientY;

    let xDiff = xDown - xUp;
    let yDiff = yDown - yUp;
    // немного поясню здесь. Тут берутся модули движения по оси абсцисс и ординат (почему модули? потому что если движение сделано влево или вниз, то его показатель будет отрицательным) и сравнивается, чего было больше: движения по абсциссам или ординатам. Нужно это для того, чтобы, если пользователь провел вправо, но немного наискосок вниз, сработал именно коллбэк для движения вправо, а ни как-то иначе.
    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      /*most significant*/
      if (xDiff > 0) {
        /* left swipe */
        prevSlide();
      } else {
        /* right swipe */
        nextSlide();
      }
    } else {
      // Это вам, в общем-то, не надо, вы ведь только влево-вправо собираетесь двигать
      if (yDiff > 0) {
        /* up swipe */
      } else {
        /* down swipe */
      }
    }
    /* reset values */
    xDown = null;
    yDown = null;
  }

  // Accordion
  const accordionItem = document.querySelectorAll(".accordionItem"),
    accordionTitle = document.querySelectorAll(".headingContainer"),
    accordionDescriptions = document.querySelectorAll(".accordionDescriptions");

  for (let i = 0; i < accordionItem.length; i++) {
    accordionItem[i].style.height = `${accordionTitle[i].offsetHeight}px`;
    accordionItem[i].addEventListener("click", function (e) {
      if (accordionItem[i].classList.contains("show")) {
        accordionItem[i].style.height = `${accordionTitle[i].offsetHeight}px`;
        accordionItem[i].classList.remove("show");
      } else {
        accordionItem[i].style.height = `${
          accordionTitle[i].offsetHeight + accordionDescriptions[i].offsetHeight
        }px`;
        accordionItem[i].classList.add("show");
        removeAccordion(e.currentTarget);
      }
    });
  }
  function removeAccordion(item) {
    for (let i = 0; i < accordionItem.length; i++) {
      if (item !== accordionItem[i]) {
        accordionItem[i].classList.remove("show");
        accordionItem[i].style.height = `${accordionTitle[i].offsetHeight}px`;
      }
    }
  }

  //   function accordionItemSize() {
  //     for (i = 0; i < accordionTitle.length; i++) {
  //       accordionItem[i].style.maxHeight = `${accordionTitle[i].offsetHeight}px`;
  //     }
  //   }
  //   accordionItemSize();
  //   for (i = 0; i < accordionTitle.length; i++) {
  //     accordionTitle[i].addEventListener("click", toggleItem, false);
  //   }
  //   function toggleItem() {
  //     let itemClass = this.parentNode.className;

  //     for (i = 0; i < accordionItem.length; i++) {
  //       accordionItem[i].className = "accordionItem";
  //     }
  //     if (itemClass == "accordionItem") {
  //       this.parentNode.className = "accordionItem show";
  //     }
  //   }
  //   window.addEventListener("resize", function () {
  //     accordionItemSize();
  //   });
});