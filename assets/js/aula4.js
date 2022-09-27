const botao = document.getElementById("botao");
const inputName1 = document.getElementById("name-1");
const spanShow1 = document.getElementById("name-show-1");

const inputName2 = document.getElementById("name-2");
const spanShow2 = document.getElementById("name-show-2");

const inputName3 = document.getElementById("name-3");
const spanShow3 = document.getElementById("name-show-3");

botao.onclick = (event) => {
  event.preventDefault();
  event.stopPropagation();

  spanShow1.innerHTML = inputName1.value;
  spanShow2.innerHTML = inputName2.value;
  spanShow3.innerHTML = inputName3.value;
};
