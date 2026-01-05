function escrevendoLetra() {
  function ativaLetra(elemento) {
    const arrTexto = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    arrTexto.forEach((letra, i) => {
      setTimeout(() => {
        elemento.innerHTML += letra;
      }, 75 * i);
    });
  }
  const titulo = document.querySelector('.digitando');
  if (titulo) ativaLetra(titulo);
}
escrevendoLetra();

function menuMobol() {
  const ativaMenu = document.querySelector('.fa-bars');
  const navMenu = document.querySelector('.navegacao-primaria');

  if (ativaMenu && navMenu) {
    ativaMenu.addEventListener('click', () => {
      ativaMenu.classList.toggle('fa-x');
      navMenu.classList.toggle('ativado');
    });
  }
}
menuMobol();

function sobreMim() {
  const divExperience = document.querySelectorAll('.experience_content div');
  const liExperience = document.querySelectorAll('.experience_content ul li');
  const divEducation = document.querySelectorAll('.education_content div');
  const liEducation = document.querySelectorAll('.education_content ul li');

  let currentExperience = 0;
  let currentEducation = 0;

  let intervalExperience;
  let intervalEducation;

  if (divExperience.length && liExperience.length && divEducation.length && liEducation.length) {
    divExperience[currentExperience].classList.add('ativo');
    liExperience[currentExperience].classList.add('ativo');
    divEducation[currentEducation].classList.add('ativo');
    liEducation[currentEducation].classList.add('ativo');

    function slideShow(index) {
      divExperience.forEach((div) => div.classList.remove('ativo'));
      liExperience.forEach((botao) => botao.classList.remove('ativo'));
      divExperience[index].classList.add('ativo');
      liExperience[index].classList.add('ativo');
    }

    function slideShow2(index) {
      divEducation.forEach((div) => div.classList.remove('ativo'));
      liEducation.forEach((botao) => botao.classList.remove('ativo'));
      divEducation[index].classList.add('ativo');
      liEducation[index].classList.add('ativo');
    }

    function iniciarSlides() {
      intervalExperience = setInterval(() => {
        currentExperience = (currentExperience + 1) % divExperience.length;
        slideShow(currentExperience);
      }, 5000);

      intervalEducation = setInterval(() => {
        currentEducation = (currentEducation + 1) % divEducation.length;
        slideShow2(currentEducation);
      }, 5000);
    }

    function pararSlides() {
      clearInterval(intervalExperience);
      clearInterval(intervalEducation);
    }

    liExperience.forEach((event, index) => {
      event.addEventListener('click', () => {
        pararSlides();
        currentExperience = index;
        slideShow(index);
      });
    });

    liEducation.forEach((event, index) => {
      event.addEventListener('click', () => {
        pararSlides();
        currentEducation = index;
        slideShow2(index);
      });
    });

    iniciarSlides();
  }
}
sobreMim();

const listaALL = document.querySelectorAll('.projects_armazenamento ul li');
const buttonGeral = document.querySelectorAll('.project_navegacao li');
const buttonALL = document.querySelector('.project_models .all');

listaALL.forEach((item) => {
  item.classList.add('ativo');
})

function removeClick(index) {
  buttonGeral.forEach((item) => {
    item.classList.remove('ativo');
  })
  buttonGeral[index].classList.add('ativo')
}

buttonGeral.forEach((event, index) => {
  event.addEventListener('click', () => {
    removeClick(index)
  })
})

function showLista(lista, buttom = "all") {
  lista.forEach((item) => {
    item.classList.remove('ativo');
  });

  if (buttom == 'design') {
    lista[0].classList.add('ativo')
    lista[1].classList.add('ativo')
  }
  if (buttom == 'graphic') {
    lista[2].classList.add('ativo');
    lista[3].classList.add('ativo');
  }

  if (buttom == 'website') {
    lista[4].classList.add('ativo');
    lista[5].classList.add('ativo');
    lista[6].classList.add('ativo');
    lista[7].classList.add('ativo');
  }

  if (buttom == 'all') {
    lista[0].classList.add('ativo')
    lista[1].classList.add('ativo')
    lista[2].classList.add('ativo');
    lista[3].classList.add('ativo');
    lista[4].classList.add('ativo');
    lista[5].classList.add('ativo');
    lista[6].classList.add('ativo');
    lista[7].classList.add('ativo');
  }
}

buttonGeral.forEach((item) => {
  item.addEventListener('click', (e) => {
    let currentButton = e.target;
    if (currentButton.classList.contains('all')) {
      showLista(listaALL);
    } if (currentButton.classList.contains('design')) {
      showLista(listaALL, "design")
    }

    if (currentButton.classList.contains('graphic')) {
      showLista(listaALL, "graphic")
    }

    if (currentButton.classList.contains('website')) {
      showLista(listaALL, "website")
    }

    if (currentButton.classList.contains('all')) {
      showLista(listaALL, "all")
    }
  });
});


