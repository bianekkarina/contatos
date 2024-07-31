function listarContatos(contatos) {
    console.log('\nLista de contatos registrados: ')
        contatos.forEach((contato, index) => {
            console.log(`
            \n${index + 1}.
    |Nome: ${contato.nome}
    |Telefone: ${contato.telefone}
    |Email: ${contato.email}
    `)
    });
  }
  
  module.exports = { listarContatos } 