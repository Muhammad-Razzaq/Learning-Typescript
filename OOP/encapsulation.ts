abstract class Country {
    public name: string;
    public language: string;
    public population: number;
    public populationGrwothRate: number;
    private _statePrivacy: string;
    private _leader: string;

    constructor(name: string, language: string, population: number, populationGrwothRate: number, _statePrivacey: string, _leader: string) {
        this.name = name;
        this.language = language;
        this.population = population;
        this.populationGrwothRate = populationGrwothRate;
        this._statePrivacy = _statePrivacey;
        this._leader = _leader;
    }

    public abstract populationGrowth(): number;
    public get privateData(): string {
        return this._statePrivacy;
    }
    public set leader(newLeader: string) {
        this._leader = newLeader;
    }
}

class OICCountry extends Country{
    constructor(name: string, language: string, population: number, populationGrwothRate: number, statePrivacy: string, leader: string) {
        super(name, language, population, populationGrwothRate, statePrivacy, leader);
    }

    public populationGrowth(): number {
        this.population = this.population * (1 + this.populationGrwothRate / 100);
        return this.population
    }
}

let Pakistan = new OICCountry("Pakistan", "Urdu", 30000000, 2.5, "Private Data", "Pakistan Leader");
console.info(Pakistan);

// Pakistan._statePrivacy // Error because of private

// console.info(Pakistan.privateData);

Pakistan.leader = "New Leader";
console.info(Pakistan);

export{}