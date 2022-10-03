window.addEventListener("load", () => {
  const input = document.querySelector("#new-act-input");
  const timeInput = document.querySelector("#new-act-time");
  const saveLS = document.querySelector("#saveLS");

  function saveLocalStorage() {
    const card = input.value;
    const time = timeInput.value;
    let atividade = "Nome da atividade: " + card + ", " + "Horario: " + timeInput.value;

    localStorage.setItem("atividade", JSON.stringify(atividade));
  }

  function main(){
    var act = input.value;
    saveLS.addEventListener("click", saveLocalStorage);
  }

  main();
});
