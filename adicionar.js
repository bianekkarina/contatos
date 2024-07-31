function adicionarContato(contatos, prompt, callback) {
    var nome = prompt("Informe o nome do contato: ")
    var telefone = prompt("Informe o telefone: ")
    var email = prompt("Informe o email: ")

    contatos.push({nome, telefone, email})
    console.log('Contato cadastrado com sucesso!')
    callback()
}

module.exports = { adicionarContato }