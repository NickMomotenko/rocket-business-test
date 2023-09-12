(() => {
  const sliderList = document.querySelector("#slider-list");
  const sliderControlls = document.querySelector("#slider-controlls");

  const sliderDisplayCurrent = document.querySelector(
    "#slider-display-current"
  );
  const sliderDisplayAll = document.querySelector("#slider-display-all");

  let currentIndex = 0;

  sliderDisplayAll.textContent = sliderList.children.length;

  sliderControlls.addEventListener("click", (event) => {
    const target = event.target;

    if (target.classList.contains("button")) {
      const direction = target.dataset.click;

      getDirection(direction);
    } else if (target.closest(".button")) {
      const direction = target.parentNode.dataset.click;

      getDirection(direction);
    }
  });

  function getDirection(direct) {
    if (direct === "prev") {
      if (currentIndex === 0) return;

      currentIndex -= 1;

      sliderDisplayCurrent.textContent =
        currentIndex === 0 || currentIndex === 1 ? 1 : currentIndex - 1;

      console.log(currentIndex);

      doTranslate();
    }

    if (direct === "next") {
      if (currentIndex === sliderList.children.length - 1) return;

      currentIndex += 1;
      console.log(currentIndex);

      sliderDisplayCurrent.textContent = currentIndex + 1;

      doTranslate();
    }
  }

  function doTranslate() {
    sliderList.style.transform = `translateX(-${currentIndex * 100}%)`;
  }
})();
