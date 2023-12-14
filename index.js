    function pegaValorDoCampo(campo){
        return document.getElementById(campo).value
    }

    function pegaDadosDoFormulario(){
        let nome = pegaValorDoCampo("nome");
        let sobreNome = pegaValorDoCampo("sobreNome");
        let idade = pegaValorDoCampo("idade");

        registraNovoCliente(nome, sobreNome, idade);
        mostrarTabela();
        limpaFormularioDeCliente();
    } 

    function limpaFormularioDeCliente(){
        document.getElementById("nome").value = "";
        document.getElementById("sobreNome").value = "";
        document.getElementById("idade").value = "";
    }