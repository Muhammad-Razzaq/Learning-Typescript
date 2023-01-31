let userName: (name: string, age?: string) => string;

const nickNames = ["Sameer", "Sam", "Sameer Raza"];

function allNickNames(callback : (index: number) => string){
    for(let i = 0; i < nickNames.length; i++){
        console.log(callback(i));
    }
}

function getNameAt(index: number){
    return `${nickNames[index]}`;
}

allNickNames(getNameAt);