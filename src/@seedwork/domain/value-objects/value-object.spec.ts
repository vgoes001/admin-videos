import ValueObject from "./value-object";

class StubVaueObject extends ValueObject {

}

describe("Value Object Unit Tests", () => {
    it("should set value", () => {
        let vo = new StubVaueObject('string value')
        expect(vo.value).toBe('string value')

        vo = new StubVaueObject({ prop1: 'value1' })
        expect(vo.value).toStrictEqual({ prop1: 'value1' })
    })
})