class Country {
    public name: string;
    public language: string;
    public population: number;
    public populationGrwothRate: number;
    private _statePrivacy: string;
    private _leader: string;
    public planet = "Earth";
    public religion: string;

    constructor(name: string, language: string, population: number, populationGrwothRate: number, _statePrivacey: string, _leader: string, religion: string) {
        this.name = name;
        this.language = language;
        this.population = population;
        this.populationGrwothRate = populationGrwothRate;
        this._statePrivacy = _statePrivacey;
        this._leader = _leader;
        this.religion = religion;
    }

    public populationGrowth(): number { return 1};
    public get privateData(): string {
        return this._statePrivacy;
    }
    public set leader(newLeader: string) {
        this._leader = newLeader;
    }
    public greeting(): string {
        return "Hello";
    }
}

class OICCountry extends Country{
    constructor(name: string, language: string, population: number, populationGrwothRate: number, statePrivacy: string, leader: string, religion = "Islam") {
        super(name, language, population, populationGrwothRate, statePrivacy, leader, religion);
    }

    public populationGrowth(): number {
        this.population = this.population * (1 + this.populationGrwothRate / 100);
        return this.population
    }

    public greeting(): string {
        return "Assalamualikum";
    }
}

let Pakistan = new OICCountry("Pakistan", "Urdu", 30000000, 2.5, "Private Data", "Pakistan Leader");
console.info(Pakistan);
console.info(Pakistan.greeting());


let China = new Country("China", "Chineese", 5000000, 0, "Private Data", "China's Leader", "Buddism");
console.info(China);
console.info(China.greeting());

export{}