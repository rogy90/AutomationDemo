/**
 * The Human class represents a simple model of a person,
 * illustrating OOP principles such as Encapsulation,
 * Reusability, and Maintainability.
 */
class Human {
    public name: string;
    public age: number;

    /**
     * A static property that represents the species of all Human instances.
     * 'static' means it belongs to the class itself, not individual objects.
     */
    public static species: string = 'Homo sapiens';

    /**
     * The constructor initializes the name and age for a new Human instance.
     * @param name The person's name.
     * @param age The person's age in years.
     */
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    /**
     * A simple method allowing the Human to introduce themselves.
     * Logs a short description to the console.
     */
    public introduce(): void {
        console.log(`Hi, my name is ${this.name}, and I'm ${this.age} years old.`);
    }

    /**
     * Increases the Human's age by one and logs a birthday message.
     */
    public celebrateBirthday(): void {
        this.age += 1;
        console.log(`Happy Birthday, ${this.name}! You are now ${this.age} years old.`);
    }

    /**
     * A new method simulating walking a certain number of steps.
     * @param steps The number of steps to walk.
     */
    public walk(steps: number): void {
        console.log(`${this.name} is walking ${steps} step${steps !== 1 ? 's' : ''}!`);
    }

    public run(steps: number): void {
        console.log(`${this.name} is running ${steps} step${steps !== 1 ? 's' : ''}!`);
    }

    /**
     * A static method providing information about the species.
     * It can be called without creating an instance of the class.
     */
    public static speciesInfo(): void {
        console.log(`We are all classified as: ${Human.species}.`);
    }
}

// EXAMPLE USAGE
const alice = new Human('Alice', 25);
const bob = new Human('Bob', 30);

const joy = new Human('Joy', 20);

// 1) Both instances introduce themselves.
alice.introduce();         // "Hi, my name is Alice, and I'm 25 years old."
bob.introduce();           // "Hi, my name is Bob, and I'm 30 years old."

joy.introduce();



// 2) Alice celebrates a birthday, which increments her age.
alice.celebrateBirthday(); // "Happy Birthday, Alice! You are now 26 years old."

// 3) Show walking behavior with the new walk method.
alice.walk(100); // "Alice is walking 100 steps!"
bob.walk(1);     // "Bob is walking 1 step!"

// 4) Print static information about the species (no instance required).
Human.speciesInfo();       // "We are all classified as: Homo sapiens."
