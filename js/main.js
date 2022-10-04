window.addEventListener("load", () => {
  const form = document.querySelector("#new-act-form");
  const input = document.querySelector("#new-act-input");
  const timeInput = document.querySelector("#new-act-time");
  const dayInput = document.querySelector("#new-act-day");

  const mondayDiv = document.querySelector("#cardsMo");
  const tuesdayDiv = document.querySelector("#cardsTu");
  const wednesdayDiv = document.querySelector("#cardsWe");
  const thursdayDiv = document.querySelector("#cardsTh");
  const fridayDiv = document.querySelector("#cardsFr");
  const saturdayDiv = document.querySelector("#cardsSa");
  const sundayDiv = document.querySelector("#cardsSu");

  const deleteAll = document.querySelector("#deleteAll");


  const array = [];

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const card = input.value;
    const time = timeInput.value;
    const day = dayInput.value;

    if (!card) {
      alert("Escreva a atividade por favor");
      return;
    }

    if (day == "Segunda-feira") {
      // const mondayDiv = document.createElement("div");
      // mondayDiv.classList.add("cards");

      const card_el = document.createElement("div");
      card_el.classList.add("card");

      const time_div = document.createElement("div");
      time_div.classList.add("time-div");
      time_div.classList.add("monday");
      time_div.innerText = time;

      const retangle = document.createElement("div");
      retangle.classList.add("retangle");
      retangle.classList.add("monday");

      const card_content_el = document.createElement("div");
      card_content_el.classList.add("content");
      card_content_el.innerText = card;

      const btn_remove_div = document.createElement("div");
      btn_remove_div.classList.add("btn-remove");

      const btn_remove = document.createElement("button");
      btn_remove.classList.add("btn-default");
      btn_remove.classList.add("red");
      btn_remove.classList.add("remove");
      btn_remove.innerText = "Apagar";

      card_el.appendChild(time_div);
      card_el.appendChild(retangle);
      card_el.appendChild(card_content_el);
      btn_remove_div.appendChild(btn_remove);
      card_el.appendChild(btn_remove_div);
      // list_el.appendChild(card_el);
      mondayDiv.appendChild(card_el);

      btn_remove.addEventListener("click", () => {
        mondayDiv.removeChild(card_el);
      });

      if (array.includes(time)) {
        console.log(array);
        retangle.classList.add("conflicted");
        time_div.classList.add("none");
        card_el.classList.add("absolute");
      } else{
        array.push(time);    
      }
    }

    if (day == "Terça-feira") {
      const card_el = document.createElement("div");
      card_el.classList.add("card");

      const time_div = document.createElement("div");
      time_div.classList.add("time-div");
      time_div.classList.add("tuesday");
      time_div.innerText = time;

      const retangle = document.createElement("div");
      retangle.classList.add("retangle");
      retangle.classList.add("tuesday");

      const card_content_el = document.createElement("div");
      card_content_el.classList.add("content");
      card_content_el.innerText = card;

      const btn_remove_div = document.createElement("div");
      btn_remove_div.classList.add("btn-remove");

      const btn_remove = document.createElement("button");
      btn_remove.classList.add("btn-default");
      btn_remove.classList.add("red");
      btn_remove.classList.add("remove");
      btn_remove.innerText = "Apagar";

      card_el.appendChild(time_div);
      card_el.appendChild(retangle);
      card_el.appendChild(card_content_el);
      card_el.appendChild(btn_remove_div);
      btn_remove_div.appendChild(btn_remove);
      tuesdayDiv.appendChild(card_el);

      btn_remove.addEventListener("click", () => {
        tuesdayDiv.removeChild(card_el);
      });

      if (array.includes(time)) {
        console.log(array);
        retangle.classList.add("conflicted");
        time_div.classList.add("none");
        card_el.classList.add("absolute");
      } else{
        array.push(time);    
      }
    }

    if (day == "Quarta-feira") {
      const card_el = document.createElement("div");
      card_el.classList.add("card");

      const time_div = document.createElement("div");
      time_div.classList.add("time-div");
      time_div.classList.add("wednesday");
      time_div.innerText = time;

      const retangle = document.createElement("div");
      retangle.classList.add("retangle");
      retangle.classList.add("wednesday");

      const card_content_el = document.createElement("div");
      card_content_el.classList.add("content");
      card_content_el.innerText = card;

      const btn_remove_div = document.createElement("div");
      btn_remove_div.classList.add("btn-remove");

      const btn_remove = document.createElement("button");
      btn_remove.classList.add("btn-default");
      btn_remove.classList.add("red");
      btn_remove.classList.add("remove");
      btn_remove.innerText = "Apagar";

      card_el.appendChild(time_div);
      card_el.appendChild(retangle);
      card_el.appendChild(card_content_el);
      btn_remove_div.appendChild(btn_remove);
      card_el.appendChild(btn_remove_div);
      wednesdayDiv.appendChild(card_el);

      btn_remove.addEventListener("click", () => {
        wednesdayDiv.removeChild(card_el);
      });

      if (array.includes(time)) {
        console.log(array);
        retangle.classList.add("conflicted");
        time_div.classList.add("none");
        card_el.classList.add("absolute");
      } else{
        array.push(time);    
      }
    }

    if (day == "Quinta-feira") {
      const card_el = document.createElement("div");
      card_el.classList.add("card");

      const time_div = document.createElement("div");
      time_div.classList.add("time-div");
      time_div.classList.add("thursday");
      time_div.innerText = time;

      const retangle = document.createElement("div");
      retangle.classList.add("retangle");
      retangle.classList.add("thursday");

      const card_content_el = document.createElement("div");
      card_content_el.classList.add("content");
      card_content_el.innerText = card;

      const btn_remove_div = document.createElement("div");
      btn_remove_div.classList.add("btn-remove");

      const btn_remove = document.createElement("button");
      btn_remove.classList.add("btn-default");
      btn_remove.classList.add("red");
      btn_remove.classList.add("remove");
      btn_remove.innerText = "Apagar";

      card_el.appendChild(time_div);
      card_el.appendChild(retangle);
      card_el.appendChild(card_content_el);
      btn_remove_div.appendChild(btn_remove);
      card_el.appendChild(btn_remove_div);
      thursdayDiv.appendChild(card_el);

      btn_remove.addEventListener("click", () => {
        thursdayDiv.removeChild(card_el);
      });

      if (array.includes(time)) {
        console.log(array);
        retangle.classList.add("conflicted");
        time_div.classList.add("none");
        card_el.classList.add("absolute");
      } else{
        array.push(time);    
      }
    }

    if (day == "Sexta-feira") {
      const card_el = document.createElement("div");
      card_el.classList.add("card");

      const time_div = document.createElement("div");
      time_div.classList.add("time-div");
      time_div.classList.add("friday");
      time_div.innerText = time;

      const retangle = document.createElement("div");
      retangle.classList.add("retangle");
      retangle.classList.add("friday");

      const card_content_el = document.createElement("div");
      card_content_el.classList.add("content");
      card_content_el.innerText = card;

      const btn_remove_div = document.createElement("div");
      btn_remove_div.classList.add("btn-remove");

      const btn_remove = document.createElement("button");
      btn_remove.classList.add("btn-default");
      btn_remove.classList.add("red");
      btn_remove.classList.add("remove");
      btn_remove.innerText = "Apagar";

      card_el.appendChild(time_div);
      card_el.appendChild(retangle);
      card_el.appendChild(card_content_el);
      btn_remove_div.appendChild(btn_remove);
      card_el.appendChild(btn_remove_div);
      fridayDiv.appendChild(card_el);

      btn_remove.addEventListener("click", () => {
        fridayDiv.removeChild(card_el);
      });

      if (array.includes(time)) {
        console.log(array);
        retangle.classList.add("conflicted");
        time_div.classList.add("none");
        card_el.classList.add("absolute");
      } else{
        array.push(time);    
      }
    }

    if (day == "Sábado") {
      const card_el = document.createElement("div");
      card_el.classList.add("card");

      const time_div = document.createElement("div");
      time_div.classList.add("time-div");
      time_div.classList.add("saturday");
      time_div.innerText = time;

      const retangle = document.createElement("div");
      retangle.classList.add("retangle");
      retangle.classList.add("saturday");

      const card_content_el = document.createElement("div");
      card_content_el.classList.add("content");
      card_content_el.innerText = card;

      const btn_remove_div = document.createElement("div");
      btn_remove_div.classList.add("btn-remove");

      const btn_remove = document.createElement("button");
      btn_remove.classList.add("btn-default");
      btn_remove.classList.add("red");
      btn_remove.classList.add("remove");
      btn_remove.innerText = "Apagar";

      card_el.appendChild(time_div);
      card_el.appendChild(retangle);
      card_el.appendChild(card_content_el);
      btn_remove_div.appendChild(btn_remove);
      card_el.appendChild(btn_remove_div);
      saturdayDiv.appendChild(card_el);

      btn_remove.addEventListener("click", () => {
        saturdayDiv.removeChild(card_el);
      });

      if (array.includes(time)) {
        console.log(array);
        retangle.classList.add("conflicted");
        time_div.classList.add("none");
        card_el.classList.add("absolute");
      } else{
        array.push(time);    
      }
    }

    if (day == "Domingo") {
      const card_el = document.createElement("div");
      card_el.classList.add("card");

      const time_div = document.createElement("div");
      time_div.classList.add("time-div");
      time_div.classList.add("sunday");
      time_div.innerText = time;

      const retangle = document.createElement("div");
      retangle.classList.add("retangle");
      retangle.classList.add("sunday");

      const card_content_el = document.createElement("div");
      card_content_el.classList.add("content");
      card_content_el.innerText = card;

      const btn_remove_div = document.createElement("div");
      btn_remove_div.classList.add("btn-remove");

      const btn_remove = document.createElement("button");
      btn_remove.classList.add("btn-default");
      btn_remove.classList.add("red");
      btn_remove.classList.add("remove");
      btn_remove.innerText = "Apagar";

      card_el.appendChild(time_div);
      card_el.appendChild(retangle);
      card_el.appendChild(card_content_el);
      btn_remove_div.appendChild(btn_remove);
      card_el.appendChild(btn_remove_div);
      sundayDiv.appendChild(card_el);

      btn_remove.addEventListener("click", () => {
        sundayDiv.removeChild(card_el);
      });

      if (array.includes(time)) {
        console.log(array);
        retangle.classList.add("conflicted");
        time_div.classList.add("none");
        card_el.classList.add("absolute");
      } else{
        array.push(time);    
      }
    }
  });

});
