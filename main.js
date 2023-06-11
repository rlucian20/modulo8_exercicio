const inputNomeContato = document.getElementById('nome-contato')
const inputNumeroContato = document.getElementById('numero-contato')
const form = document.getElementById('form-cadastro')

let contato = []
let numero = []
let linhas = ''

form.addEventListener('submit', function (e) {
  e.preventDefault()

  novasLinhas()
  atualizaAgenda()
})

function novasLinhas() {
  contato.push(inputNomeContato.value)
  numero.push(parseFloat(inputNumeroContato.value))

  let adicionaLinha = '<tr>'
  adicionaLinha += `<td>${inputNomeContato.value}</td>`
  adicionaLinha += `<td>${inputNumeroContato.value}</td>`
  adicionaLinha += '</tr>'

  linhas += adicionaLinha

  inputNomeContato.value = ''
  inputNumeroContato.value = ''
}

function atualizaAgenda() {
  const corpoTabela = document.querySelector('tbody')
  corpoTabela.innerHTML = linhas
}
