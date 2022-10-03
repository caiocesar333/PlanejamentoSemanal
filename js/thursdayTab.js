window.addEventListener("load", () => {
    const mondayDiv = document.querySelector("#cardsMo");
    const tuesdayDiv = document.querySelector("#cardsTu");
    const wednesdayDiv = document.querySelector("#cardsWe");
    const thursdayDiv = document.querySelector("#cardsTh");
    const fridayDiv = document.querySelector("#cardsFr");
    const saturdayDiv = document.querySelector("#cardsSa");
    const sundayDiv = document.querySelector("#cardsSu");
  
    const thursdayTab = document.querySelector("#thursdayTab");
  
    thursdayTab.addEventListener("click", () => {
      mondayDiv.classList.add("none");
      tuesdayDiv.classList.add("none");
      wednesdayDiv.classList.add("none");
      thursdayDiv.classList.remove("none");
      fridayDiv.classList.add("none");
      saturdayDiv.classList.add("none");
      sundayDiv.classList.add("none");
    });
  });
  