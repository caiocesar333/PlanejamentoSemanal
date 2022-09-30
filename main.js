window.addEventListener('load', () => {
  const form = document.querySelector("#new-act-form");
  const input = document.querySelector("#new-act-input");
  const timeInput = document.querySelector("#new-act-time");
  const list_el = document.querySelector("#cards");

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const card = input.value;
    const time = timeInput.value
    
    if(!card){
        alert("Escreva a atividade por favor");
        return;
    } 

    const card_el = document.createElement("div");
    card_el.classList.add("card");

    const time_div = document.createElement("div");
    time_div.classList.add("time-div");
    time_div.innerText = time;

    const retangle = document.createElement("div");
    retangle.classList.add("retangle");

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
    btn_remove_div.appendChild(btn_remove)
    list_el.appendChild(card_el);
  });
});
