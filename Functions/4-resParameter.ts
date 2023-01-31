// It is use only one time in every fuction
// It should be array type, because its a collection
// It parameter is always last in list

function hello4(name = "Sameer", ...nickNames : string[]){
    console.log(`Hello ${name} as known as ${nickNames}`);
}

hello4("Sameer", "Raza", "Sameer Raza", "Raza Sameer");