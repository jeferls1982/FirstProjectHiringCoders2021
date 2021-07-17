var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("slides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) { myIndex = 1 }
  x[myIndex - 1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

//let arr = [];
//localStorage.setItem('list', JSON.stringify(arr));

//----------------------------------------------------formulario
var count = document.getElementById('count_email');
count.innerHTML = 0;
if (!localStorage.getItem('list')) {
  let arr = [];
  localStorage.setItem('list', JSON.stringify(arr));
}else{
  setCount()  
}


class Cadastro {
  constructor(nome, email) {
    this.nome = nome;
    this.email = email;
  }
}



var load = false;
var loading = document.getElementById('loading');
var erro = document.getElementById('erro');
var success = document.getElementById('success');
const btn = document.getElementById('submit');







btn.addEventListener("click", function (e) {
  e.preventDefault();
  loading.style.display = 'block'
  var list = JSON.parse(localStorage.getItem('list'));
  load = true;
  //--------------------------------------------setTimeout(() => {  loading.style.display = 'none'; }, 1000);
  let cadastro = setDados();
  if (cadastro) {
    list.push(cadastro);
    list = JSON.stringify(list);   
    localStorage.setItem('list', list);
    setCount();
    limpaCampos();
    success.style.display = 'block';
    success.innerHTML = "Email cadastrado com sucesso ;)"

  } else {
    limpaCampos();
    erro.style.display = "block"
    erro.innerHTML = "Algo deu errado :(   Tente novamente! "
    return false
  }

});

function setDados() {
  let nome = document.getElementById('nome').value;
  let email = document.getElementById('email').value;
  var cadastro = new Cadastro(nome, email);
  if (validaCampos(cadastro)) {    
    return cadastro;    
  } else {
    return false;
  }
}

function validaCampos(cadastro) {
  if (cadastro.nome == '' || cadastro.email == "") {
    erro.style.display = "block"
    erro.innerHTML = "Preencha todos os campos!"
    return false
  }  
  return true
}

function limpaCampos() {
  document.getElementById('nome').value = "";
  document.getElementById('email').value = "";
  erro.style.display = "none"
  success.style.display = "none"
}

function setCount(){
  let list = JSON.parse(localStorage.getItem('list'));  
  count.innerHTML = list.length;
}

function loader(){
  load = !load;
}











//--------------------------------------------------fim formulario

