// Object Literals
var empty_object = {};
var stooge = { "first-name": "Jerome", "last-name": "Howard" };
console.log("empty_object: " + JSON.stringify(empty_object))
console.log("stooge: " + JSON.stringify(stooge))

// Objects can nest
var flight = {
    airline: "Oceanic", 
    number: 815,
    departure: {
        IATA: "SYD",
        time: "2004-09-22 14:55",
        city: "Sydney" 
    }, 
    arrival: {
        IATA: "LAX",
        time: "2004-09-23 10:42",
        city: "Los Angeles" 
    }
};
console.log("flight: " + JSON.stringify(flight))

// Retrieval
console.log(stooge["first-name"])   // "Jerome"
console.log(flight.departure.IATA)  // "SYD"

// The undefined value is produced if an attempt 
// is made to retrieve a nonexistent member:
stooge["middle-name"] // undefined
flight.status         // undefined
stooge["FIRST-NAME"]  // undefined

// The || operator can be used to fill in default values:
var middle = stooge["middle-name"] || "(none)";
console.log("middle: " + JSON.stringify(middle))

var status = flight.status || "unknown";
console.log("status: " + status)

// Attempting to retrieve values from undefined will throw 
// a TypeError exception. This can be guarded against with the && operator:
flight.equipment                           // undefined
//flight.equipment.model                   // throw "TypeError"
flight.equipment && flight.equipment.model // undefined

// Update
stooge['first-name'] = 'Jerome';
// If the object does not already have that property name, the object is augmented
stooge['middle-name'] = 'Lester';
stooge.nickname = 'Curly';
console.log("stooge is:\n")
console.log(stooge)

flight.equipment = { model: 'Boeing 777' };
flight.status = 'overdue';

// Reference
// Objects are passed around by reference. They are never copied
var x = stooge;
x.nickname = 'Curly2';
var nick = stooge.nickname;
// nick is 'Curly' because x and stooge 
// are references to the same object
console.log("stooge.nick: " + nick)

var a = {}, b = {}, c = {};
// a, b, and c each refer to a 
// different empty object

a = b = c = {};
// a, b, and c all refer to 
// the same empty object

// Prototype
if (typeof Object.create !== 'function') {
    Object.create = function (o) { 
        var F = function () {}; 
        F.prototype = o; 
        return new F(); 
    };
}
var another_stooge = Object.create(stooge);

// The prototype link has no effect on updating. When we make changes
// to an object, the object’s prototype is not touched
another_stooge['first-name'] = 'Harry';
another_stooge['middle-name'] = 'Moses';
another_stooge.nickname = 'Moe';

// The prototype relationship is a dynamic relationship.
stooge.profession = 'actor'; 
another_stooge.profession    // 'actor'

// Reﬂection
console.log("\nReflection:")
console.log(typeof flight.number)   // 'number'
console.log(typeof flight.status)   // 'string'
console.log(typeof flight.arrival)  // 'object'
console.log(typeof flight.manifest) // 'undefined'

console.log(typeof flight.toString)    // 'function' 
console.log(typeof flight.constructor) // 'function'

flight.hasOwnProperty('number')       // false
flight.hasOwnProperty('constructor')  // false

console.log("\nEnumeration:")
// Enumeration
var name; 
for (name in another_stooge) {
    if (typeof another_stooge[name] !== 'function') {
        console.log(name + ': ' + another_stooge[name]);
    }
}

console.log("\nNo nickname:")
var i; 
var properties = [
    'first-name',
    'middle-name',
    'last-name',
    'profession' 
]; 
for (i = 0; i < properties.length; i += 1) {
    console.log(properties[i] + ': ' + another_stooge[properties[i]]); 
}

console.log("\nDelete:")
// Delete
another_stooge.nickname  // 'Moe'

// Remove nickname from another_stooge, revealing 
// the nickname of the prototype.

delete another_stooge.nickname;
console.log(another_stooge.nickname) // 'Curly2'

var MYAPP = {};
MYAPP.stooge = { "first-name": "Joe", "last-name": "Howard" };

MYAPP.flight = {
    airline: "Oceanic", 
    number: 815, departure: {
        IATA: "SYD",
        time: "2004-09-22 14:55",
        city: "Sydney"
    }, 
    arrival: {
        IATA: "LAX",
        time: "2004-09-23 10:42",
        city: "Los Angeles"
    }
};