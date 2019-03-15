const modaleContent = document.querySelectorAll('.modaleContent');

for(let i=0; i<modaleContent.length; i++){
  let nodeNumber = modaleContent[i];
  nodeNumber.parentNode.removeChild(nodeNumber);
}

const modaleKnoppen = document.querySelectorAll('.modaalKnop');
const modaleKnoppenArray = [];

let modaalAchtergrond = document.createElement('div');
modaalAchtergrond.className = 'achtergrond';
let modaalView = document.createElement('div');
modaalView.className = 'modaalView modaalAnimation';
let sluitKnop = document.createElement('button');
sluitKnop.className = 'sluitKnop';
sluitKnop.innerHTML = '&#x00D7;';

const inhoudToevoegen = (event) => {
  const teller = modaleKnoppenArray.indexOf(event.target);
  modaalView.appendChild(sluitKnop);
  modaalView.appendChild(modaleContent[teller]);
  modaalAchtergrond.appendChild(modaalView);
  document.body.appendChild(modaalAchtergrond);
}

const sluitModaal = () => {
  modaalView.innerHTML ='';
  modaalAchtergrond.innerHTML ='';
  document.body.removeChild(modaalAchtergrond);
}

sluitKnop.addEventListener('click', sluitModaal);

for(let i=0; i<modaleKnoppen.length; i++) {
  modaleKnoppenArray.push(modaleKnoppen[i]);
  modaleKnoppen[i].addEventListener('click', inhoudToevoegen)
}
