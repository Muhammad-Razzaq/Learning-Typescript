type ImranInPakistan = {name: string, age: number, type: "Pakistan",};
type ImranOverseas = {name: string, age: number, type: "Overseas", nickName: string};

type Imran = ImranInPakistan | ImranOverseas;

const imran: Imran =
    Math.random() > 0.5 
    ? {name: "Imran", age: 20, type: "Pakistan"}
    : {name: "Imran", age: 17, type: "Overseas", nickName: "Alaxander"};

if(imran.type === "Pakistan"){
    console.log(`He's Imran so we'll call him ${imran.name}`);
} else{
    console.log(`He's Imran so we'll call him ${imran.nickName}`);
}