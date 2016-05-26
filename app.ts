
class Car {
    constructor (public name: string) {
        
    }
    
    start() {
        console.log(`starting ${this.name}'s engine`)
    }
}


var car = new Car('bob');

car.start();


class BMW {
    car: Car
    constructor(public name: string){
        this.car = new Car(name);
        this.name += ' Best car!';
    }
    start() {
    }
}

var bmw = new BMW('Joe');
bmw.start();