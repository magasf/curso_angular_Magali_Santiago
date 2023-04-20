// Number
let age: number = 25;
console.log('Age:', age);

// String
let theName: string = 'John Doe';
console.log('Name:', theName);

// Boolean
let isStudent: boolean = true;
console.log('Is student:', isStudent);

// Null
let empty: null = null;
console.log('Empty:', empty);

// Undefined
let notDefined: undefined = undefined;
console.log('Not defined:', notDefined);

// Const
const pi: number = 3.14159;
console.log('Pi:', pi);

//Void
function logMessage(message: string): void {
    console.log(message);
  }

//==========================================
let unknownVar: unknown = 'Hello, World!';
let stringVar: string = unknownVar as string; // Type Assertion usando 'as'

//Operadores de tipo 
function isString(value: any): value is string {
    return typeof value === 'string';
  }
  if (isString(unknownVar)) {
    console.log('unknownVar is a string');
  } else {
    console.log('unknownVar is not a string');
  }
  