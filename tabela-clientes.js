    function montaCabecalhoTabelaCliente(){
        return "<tr><th>Nome</th><th>Sobrenome</th><th>Idade</th></tr>";
    }

    function montaConteudoTabelaCliente(){
        var clientes = obterClientes();
        var conteudo = "";
        
        for (let i = 0; i < clientes.length; i++) {
            conteudo += "<tr><td>"+clientes[i].nome+"</td><td>"+clientes[i].sobreNome+"</td><td>"+clientes[i].idade+"</td></tr>";
        }

        return conteudo;
    }

    function mostrarTabela() {
        var cabecalho = montaCabecalhoTabelaCliente();
        var conteudo = montaConteudoTabelaCliente();
        document.getElementById("divTabelaDeClientes").innerHTML = "<table border='1px' id='tabelaDeClientes'>" + cabecalho + conteudo + "</table>";
    }