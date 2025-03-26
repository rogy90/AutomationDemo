/**
 * The Human class represents a simple model of a person.
 * It uses OOP principles such as:
 * - Encapsulation of data and behavior (properties and methods).
 * - A constructor for initializing object state.
 * - Methods that operate on the class properties.
 */
var Human = /** @class */ (function () {
    /**
     * The constructor is called when creating a new Human instance.
     * It sets initial values for name and age.
     */
    function Human(name, age) {
        this.name = name;
        this.age = age;
    }
    /**
     * Introduce this person by printing a short message to the console.
     * Demonstrates how a class method can access its own properties.
     */
    Human.prototype.introduce = function () {
        console.log("Hi, my name is ".concat(this.name, ", and I'm ").concat(this.age, " years old."));
    };
    /**
     * Simulate a birthday! This method increments the person's age by 1,
     * then optionally logs a celebratory message.
     */
    Human.prototype.celebrateBirthday = function () {
        this.age += 1;
        console.log("Happy Birthday, ".concat(this.name, "! You are now ").concat(this.age, " years old."));
    };
    /**
     * A static method that can be called without an instance.
     * Provides information about the species to which all Human instances belong.
     */
    Human.speciesInfo = function () {
        console.log("We are all classified as: ".concat(Human.species, "."));
    };
    /**
     * A static property representing the species name for all 'Human' objects.
     * Static means it belongs to the class itself, not any specific instance.
     */
    Human.species = 'Homo sapiens';
    return Human;
}());
// ---------------------------
// EXAMPLE USAGE:
// ---------------------------
// 1. Creating two Human instances (objects) with different initial properties:
var alice = new Human('Alice', 25);
var bob = new Human('Bob', 30);
// 2. Calling instance methods to have them introduce themselves:
alice.introduce(); // "Hi, my name is Alice, and I'm 25 years old."
bob.introduce(); // "Hi, my name is Bob, and I'm 30 years old."
// 3. Celebrating a birthday, which modifies the object's state:
alice.celebrateBirthday(); // "Happy Birthday, Alice! You are now 26 years old."
// 4. Using a static method that applies to the class rather than a specific instance:
Human.speciesInfo(); // "We are all classified as: Homo sapiens."
