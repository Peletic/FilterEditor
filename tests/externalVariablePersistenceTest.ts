let defaultValue = "first default"

class ExternalVariablePersistenceTest {
    constructor(value? : string) {
        this.value = value ? value : defaultValue
    }
    value: string
}

const paramTest = new ExternalVariablePersistenceTest("param test value")
const defaultTestOne = new ExternalVariablePersistenceTest()

defaultValue = "second default"

const defaultTestTwo = new ExternalVariablePersistenceTest()

console.log(`
paramTest: ${paramTest.value}
defaultTestOne: ${defaultTestOne.value}
defaultTestTwo: ${defaultTestTwo.value}
`)