// Explicitely object type
type SameerType = {
    name: {firstName: string, lastName: string},
    age: number,
    teacing: boolean,
    dob: Date,
    certifications: string[]
}

let sameer : SameerType;

sameer = {
    name: {firstName: "Sameer", lastName: "Raza"},
    age: 21,
    teacing: true,
    dob: new Date(),
    certifications: ["Developer", "Engineer", "Marketing"]
}

export{};