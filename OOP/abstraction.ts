abstract class Country {
    public name: string;
    public language: string;
    public population: number;
    public populationGrwothRate: number;

    constructor(name: string, language: string, population: number, populationGrwothRate: number) {
        this.name = name;
        this.language = language;
        this.population = population;
        this.populationGrwothRate = populationGrwothRate;
    }

    public abstract populationGrowth(): number;
}

class OICCountry extends Country{
    constructor(name: string, language: string, population: number, populationGrwothRate: number) {
        super(name, language, population, populationGrwothRate);
    }

    public populationGrowth(): number {
        this.population = this.population * (1 + this.populationGrwothRate / 100);
        return this.population
    }
}

let Pakistan = new OICCountry("Pakistan", "Urdu", 30000000, 2.5);
console.info(Pakistan);

Pakistan.populationGrowth();
console.info(Pakistan);

Pakistan.populationGrowth();
console.info(Pakistan);