window.addEventListener("load", () => {
  const mondayDiv = document.querySelector("#cardsMo");
  const tuesdayDiv = document.querySelector("#cardsTu");
  const wednesdayDiv = document.querySelector("#cardsWe");
  const thursdayDiv = document.querySelector("#cardsTh");
  const fridayDiv = document.querySelector("#cardsFr");
  const saturdayDiv = document.querySelector("#cardsSa");
  const sundayDiv = document.querySelector("#cardsSu");

  const mondayTab = document.querySelector("#mondayTab");

  mondayTab.addEventListener("click", () => {
    mondayDiv.classList.remove("none");
    tuesdayDiv.classList.add("none");
    wednesdayDiv.classList.add("none");
    thursdayDiv.classList.add("none");
    fridayDiv.classList.add("none");
    saturdayDiv.classList.add("none");
    sundayDiv.classList.add("none");
  });
});
