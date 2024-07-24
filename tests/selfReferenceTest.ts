const data = {
    "exampleId": "test data real",
    "example2": "test2"
}

interface IExample {
    id : string,
    lookupData: () => string
}

class Example implements IExample {
    constructor(id : string) {
        this.id = id;
    }
    id: string;

    lookupData(): string {
        return "generic null";
    }

}

class SpecificExample extends Example {
    lookupData(): string {
        // @ts-ignore
        return data[this.id] ? data[this.id] : "null"
    }
}

const realSpecific = new SpecificExample("exampleId")
const fakeSpecific = new Example("example2")

console.log(`real ${realSpecific.lookupData()}`)
console.log(`fake ${fakeSpecific.lookupData()}`)