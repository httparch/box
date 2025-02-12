
class Animal{

    name; //access modifier private #
    type;
    color;
    
    constructor(animalDetails){
        this.name = animalDetails.name;
        this.type = animalDetails.type;
        this.color = animalDetails.color;
    }

    getName(){
        return this.name;
    }
}

class Bird extends Animal 
{

    sound;

    constructor(animalDetails){
        super(animalDetails);
        this.sound = animalDetails.sound;
    }

    getName(){
        return 'bird' + this.name;
    }
}

const bird = new Bird({
    name: 'Birdy',
    type: 'Bird',
    color: 'black',
    sound: 'tweet tweet'
})

console.log(typeof bird === 'object')
console.log(bird instanceof Animal)
console.log(bird)
console.log(bird.getName())

const animal = [
    {
        name: 'Colet',
        type: 'Dog',
        color: 'Mocha'
    },
    {
        name: 'Max',
        type: 'Beagle',
        color: 'Mocha'
    },
].map((animalDetails) => {
    return new Animal(animalDetails) //dont forget to return
})



console.log();