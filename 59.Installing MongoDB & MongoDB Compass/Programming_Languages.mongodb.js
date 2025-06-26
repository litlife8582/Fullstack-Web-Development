/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('Web_Development_Course');

// Insert a few documents into the sales collection.
db.getCollection('Programming_Languages').insertMany([
    {
      "name": "C",
      "type": "Low-level procedural programming language",
      "author": "Dennis Ritchie"
    },
    {
      "name": "C++",
      "type": "Intermediate level object-oriented programming language",
      "author": "Bjarne Stroustrup"
    },
    {
      "name": "Java",
      "type": "Intermediate level programming language",
      "author": "James Gosling"
    },
    {
      "name": "Python",
      "type": "High-level general-purpose programming language",
      "author": "Guido van Rossum"
    },
    {
      "name": "JavaScript",
      "type": "High-level interpreted scripting language",
      "author": "Brendan Eich"
    },
    {
      "name": "C#",
      "type": "High-level object-oriented programming language",
      "author": "Anders Hejlsberg"
    },
    {
      "name": "Ruby",
      "type": "High-level object-oriented programming language",
      "author": "Yukihiro Matsumoto"
    },
    {
      "name": "Go",
      "type": "Compiled statically typed language",
      "author": "Robert Griesemer, Rob Pike, Ken Thompson"
    },
    {
      "name": "Swift",
      "type": "High-level programming language for iOS/macOS",
      "author": "Apple Inc."
    },
    {
      "name": "Kotlin",
      "type": "Statically typed programming language for JVM",
      "author": "JetBrains"
    },
    {
      "name": "PHP",
      "type": "Server-side scripting language",
      "author": "Rasmus Lerdorf"
    },
    {
      "name": "Rust",
      "type": "Systems programming language focused on safety",
      "author": "Graydon Hoare"
    },
    {
      "name": "TypeScript",
      "type": "Typed superset of JavaScript",
      "author": "Anders Hejlsberg"
    },
    {
      "name": "Perl",
      "type": "High-level interpreted language",
      "author": "Larry Wall"
    },
    {
      "name": "Scala",
      "type": "Object-functional programming language",
      "author": "Martin Odersky"
    },
    {
      "name": "Haskell",
      "type": "Purely functional programming language",
      "author": "Simon Peyton Jones, Paul Hudak, et al."
    },
    {
      "name": "Lisp",
      "type": "Family of functional programming languages",
      "author": "John McCarthy"
    },
    {
      "name": "R",
      "type": "Statistical computing language",
      "author": "Ross Ihaka and Robert Gentleman"
    },
    {
      "name": "MATLAB",
      "type": "Numerical computing language",
      "author": "MathWorks"
    },
    {
      "name": "Dart",
      "type": "Client-optimized language for UI",
      "author": "Google"
    }
  ]
);

// Run a find command to view items sold on April 4th, 2014.
const salesOnApril4th = db.getCollection('sales').find({
  date: { $gte: new Date('2014-04-04'), $lt: new Date('2014-04-05') }
}).count();

// Print a message to the output window.
console.log(`Done inserting data`); 