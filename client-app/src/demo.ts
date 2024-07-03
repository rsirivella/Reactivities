export interface Duck{
    name: string;
    nooflegs: number;
    makeSound: (sound: string) => void;
}

const duck1: Duck = {
    name: 'duckey',
    nooflegs : 2,
    makeSound: (sound: string) => console.log(sound)
}

const duck2 : Duck= {
    name: 'hey',
    nooflegs : 2,
    makeSound: (sound: string) => console.log(sound)
}
duck1.makeSound('quack')
duck2.makeSound('sound');
//duck1.name = '42';

export const ducks = [duck1, duck2]