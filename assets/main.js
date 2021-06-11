let body = document.body;
let activeChoice = document.querySelector('.active');
let logo = document.getElementById('logo');

/*====== CHANGE CUP =======*/
function changeCup(cup) {
  let cupType = cup.getAttribute('data-id');

  /*====== Remove all Class from body =======*/
  body.className = '';
  /*====== Remove active from li  =======*/
  if (activeChoice) activeChoice.className = 'choice__item';
  /*====== Remove class img-milk =======*/
  document.querySelector('.cup__img').className = 'cup__img absolute';
  /*====== Add a New Class =======*/
  body.classList.add(cupType);
  cup.className = 'choice__item active';

  /*====== Change logo =======*/
  logo.src = `./assets/images/${cupType}.png`;

  if (cupType === 'milk')
    document.querySelector('.cup__img').classList.add('img-milk');
  if (cupType === 'tea')
    document.querySelector('.cup__img').classList.add('img-tea');
  if (cupType === 'coffee')
    document.querySelector('.cup__img').classList.add('img-coffee');
}
