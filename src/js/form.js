(() => {
  const form = document.querySelector("#form");
  const formContainer = document.querySelector(".form");

  const orderBtn = document.querySelectorAll(".button.button--order");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const form = event.currentTarget;

    const userName = form.elements.name.value;
    const userPhone = form.elements.tel.value;

    if (!userName && !userPhone) return;

    alert(`Имя: ${userName} , номер телефона: ${userPhone}`);
  });

  formContainer.addEventListener("click", (event) => {
    if (event.target === form || event.target.closest("#form")) return;

    formContainer.style.left = "100%";
  });

  orderBtn.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.preventDefault();

      formContainer.style.left = "0";
    });
  });
})();
