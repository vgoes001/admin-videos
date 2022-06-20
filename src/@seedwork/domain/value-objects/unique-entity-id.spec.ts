
import InvalidUuidError from "../../errors/invalid-uuid.error"
import UniqueEntityId from "./unique-entity-id"

describe("UniqueEntityId unit tests", () => {
    it("should throw error when uuid is invalid ", () => {
        const validateSpy = jest.spyOn(UniqueEntityId.prototype as any, 'validate')
        expect(() => new UniqueEntityId('fake id')).toThrow(new InvalidUuidError)
        expect(validateSpy).toHaveBeenCalled()
    })

    it("should accept a uuid passed in constructor", () => {
        const uuid = 'cec8ccd1-59cb-4897-95f5-d9979ba1ca72'
        const validateSpy = jest.spyOn(UniqueEntityId.prototype as any, 'validate')
        const vo = new UniqueEntityId(uuid)
        expect(vo.id).toBe(uuid)
        expect(validateSpy).toHaveBeenCalled()
    })


})