const { listarContatos } = require('./listar');

function editarContato(contatos, prompt, callback) {
    listarContatos(contatos)
    let index = parseInt(prompt("Selecione o contato para editar: "))
    if (index > 0 && index <= contatos.length) {
        contatos[index-1].nome = prompt("Informe o nome atualizado: ")
        contatos[index-1].telefone = prompt("Informe o telefone atualizado: ")
        contatos[index-1].email = prompt("Informe o email atualizado: ")
        callback()
    } else {
        throw new Error("Número inválido!")
    }
}

module.exports = { editarContato }