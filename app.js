const prompt = require('prompt-sync')();

const { adicionarContato } = require('./adicionar');
const { listarContatos } = require('./listar');
const { editarContato } = require('./editar');
const { deletarContato } = require('./deletar');

let contatos = [
    { nome: 'Alice', telefone: '1234-5678', email: 'alice@example.com' },
    { nome: 'Bob', telefone: '8765-4321', email: 'bob@example.com' },
    { nome: 'Carol', telefone: '5678-1234', email: 'carol@example.com' }
  ];

function exibirMenu() {
  console.log(`
      Bem Vindo ao Menu!
 1 - Adicionar um novo contato
 2 - Listar todos os contatos
 3 - Atualizar um contato
 4 - Deletar um contato
 5 - Sair
  `)

  var escolha = prompt("Escolha uma opção: ")

  switch (escolha) {
    case '1':
      adicionarContato(contatos, prompt, exibirMenu)
      break
    case '2': 
      listarContatos(contatos)
      exibirMenu()
      break
    case '3':
      editarContato(contatos, prompt, exibirMenu)
      break
    case '4':
      deletarContato(contatos, prompt, exibirMenu)
      break
    case '5':
      console.log('Até a pŕoxima!')
      break
    default:
      throw new Error("Opção inválida!")
      break
  }
}

exibirMenu()