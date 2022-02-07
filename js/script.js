let button = document.getElementById('myBtn');
let input = document.getElementById('enviar');

// quando o usuario der scroll superior a 100px, o botão back-to-top aparece
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
}

// faz o botao back-to-top dar scroll ao inicio/topo da pagina
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function showMessage(){
  alert('Obrigado por se cadastrar em nosso site! Em breve entraremos em contato.');
}

function validaForm(){
  
  let nome = document.getElementById('name');
  let cpf = document.getElementById('cpf');
  let email = document.getElementById('email');

  if(nome.value == ''){
    alert('Nome não informado');
    nome.focus();
    return;
  }
  if(cpf.value == ''){
    alert('CPF não informado');
    cpf.focus();
    return;
  }
  if(email.value == ''){
    alert('Email não informado');
    email.focus();
    return;
  }

    showMessage();
}


  
  