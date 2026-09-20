class hero{
    constructor(name, age, type){
        this.name = name
        this.age = age
        this.type = type
    }
    
    attack(arma){
            switch(this.type){
            case "mago":
            arma = "magia";
            break;
            case "guerreiro":
            arma = "espada";
            break;
            case "monge":
            arma = "artes marciais";
            break;
            case "ninja":
            arma = "shuriken";
            break;
        }
     console.log(`O ${this.type} atacou usando ${arma}`);
    }    
      
}

const hero1 = new hero("Xamã", 999, "mago")
const hero2 = new hero("Nuit", 400, "guerreiro")
const hero3 = new hero("Gizmo",1985, "monge")
const hero4 = new hero("Pastel", 4, "ninja")

hero1.attack()
hero2.attack()
hero3.attack()
hero4.attack()
