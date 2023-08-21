// classe -> definição; instância -> ocorrência.

  //classe - definição
  class exemploClasse{
        nome;
        idade;

        descrever(){
            console.log("Meu nome é " + this.nome + "\nTenho " + this.idade + " anos")
        }
    }


    //instância - ocorrência
    const Vittorya = new exemploClasse();
    Vittorya.nome = "Vittorya";
    Vittorya.idade = 21;

    const Tadeu = new exemploClasse();
    Tadeu.nome = "Tadeu";
    Tadeu.idade = 35;


  Tadeu.descrever()