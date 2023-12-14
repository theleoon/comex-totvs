
    const clientes = [];

    class Cliente {
        constructor(nome, sobreNome, idade) { 
            this.nome = nome;
            this.sobreNome = sobreNome;
            this.idade = idade;
            
         }
    }

    // function criaClientes(){
    //     clientes[0] = new Cliente("Alura", "Level Up", 22);
    //     clientes[1] = new Cliente("Ricardo", "Ferreira", 22);
    //     clientes[2] = new Cliente("Claudinei", "Mendes", 22);
    //     clientes[3] = new Cliente("Bruno", "Nogueira", 22);
    //     clientes[4] = new Cliente("Elton", "Ribeiro", 22);
    // }

    function obterClientes(){
        return clientes;
    }

    function registraNovoCliente(nome, sobreNome, idade){

        clientes[clientes.length] = new Cliente(nome, sobreNome, idade);
     
    }
  
    