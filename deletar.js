const { listarContatos } = require('./listar');

function deletarContato(contatos, prompt, callback) {
    listarContatos(contatos)
    var indice = parseInt(prompt("Escolha um contato para deletar: "))
    if (indice > 0 && indice <= contatos.length) {
        contatos.splice(indice -1, 1)
        console.log("Contato deletado com sucesso!")
        callback()
    } else {
        throw new Error("Número inválido!")
    }
}

module.exports = { deletarContato }