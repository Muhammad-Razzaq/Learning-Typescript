//7 Primitives type : string, boolean, number, bigInt, symbol, underfined and null

// Implicitely object type
const sameer = {
    name: {firstName: "Sameer", lastName: "Raza"},
    age: 21,
    teacing: true,
    dob: new Date(),
    certifications: ["Developer", "Engineer", "Marketing"]
}

console.log(sameer.name.firstName);