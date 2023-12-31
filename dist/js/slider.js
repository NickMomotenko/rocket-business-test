(() => {
  const sliderList = document.querySelector("#slider-list");
  const sliderControlls = document.querySelector("#slider-controlls");

  const sliderDisplayCurrent = document.querySelector(
    "#slider-display-current"
  );
  const sliderDisplayAll = document.querySelector("#slider-display-all");

  let currentIndex = 0;
  let pageNumber = 1;

  sliderDisplayAll.textContent = sliderList.children.length;

  sliderControlls.addEventListener("click", (event) => {
    const target = event.target;
    console.log(target);

    if (target.classList.contains("button")) {
      const direction = target.dataset.click;

      getDirection(direction);
    } else if (target.closest(".button")) {
      const direction = target.closest(".button").dataset.click;

      getDirection(direction);
    }
  });

  function getDirection(direct) {
    if (direct === "prev") {
      if (currentIndex === 0) return;

      currentIndex -= 1;
      pageNumber -= 1;

      sliderDisplayCurrent.textContent = pageNumber;

      doTranslate();
    }

    if (direct === "next") {
      if (currentIndex === sliderList.children.length - 1) return;

      currentIndex += 1;
      pageNumber += 1;

      sliderDisplayCurrent.textContent = pageNumber;

      doTranslate();
    }
  }

  function doTranslate() {
    sliderList.style.transform = `translateX(-${currentIndex * 100}%)`;
  }
})();
