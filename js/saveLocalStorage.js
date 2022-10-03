window.addEventListener("load", () => {
  const input = document.querySelector("#new-act-input");
  const timeInput = document.querySelector("#new-act-time");
  const saveLS = document.querySelector("#saveLS");

  saveLS.addEventListener("click", saveLocalStorage);

  function saveLocalStorage() {
    const card = input.value;
    const time = timeInput.value;
    let atividade = card + timeInput.value;

    localStorage.setItem("atividade", JSON.stringify(atividade));
  }
});
