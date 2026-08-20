class Carro {
    // Nome das classes devem inciar com a primeira letra maiúscula,

    // Atributos
    constructor(marca, modelo, ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    // Métodos
    buzinar(){
        return "Beep! Beep!"; 
    }
}

// Criando uma instância (objeto) da classe Carro
const carroPopular = new Carro("Fiat", "Uno", "2012");
// Acessando atributos e métodos do objeto
document.write(`
    <p> O carro ${carroPopular.marca}, modelo ${carroPopular.modelo} é do ano ${carroPopular.ano} e quando ele buzina faz ${carroPopular.buzinar()} </p>
    `);