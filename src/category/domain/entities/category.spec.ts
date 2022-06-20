import { Category } from "./category"
import { omit } from 'lodash'
import UniqueEntityId from "../../../@seedwork/domain/value-objects/unique-entity-id"

describe("Category Unit Tests", () => {
    test("constructor of category", () => {
        let category = new Category({ name: 'Movie' })
        let props = omit(category.props, 'created_at')
        expect(props).toStrictEqual({
            name: "Movie",
            description: null,
            is_active: true,
        })
        expect(category.props.created_at).toBeInstanceOf(Date)

        category = new Category({
            name: 'Movie',
            description: 'some description',
            is_active: false
        })
        let created_at = new Date()
        expect(category.props).toStrictEqual({
            name: "Movie",
            description: 'some description',
            is_active: false,
            created_at
        })


        category = new Category({
            name: 'Movie',
            description: 'other description',
        })
        expect(category.props).toMatchObject({
            name: "Movie",
            description: 'other description',
        })


        category = new Category({
            name: 'Movie',
            is_active: true,
        })
        expect(category.props).toMatchObject({
            name: "Movie",
            is_active: true,
        })


        created_at = new Date()
        category = new Category({
            name: 'Movie',
            created_at
        })
        expect(category.props).toMatchObject({
            name: "Movie",
            created_at
        })
        // expect(category.name).toBe("Movie")
        // expect(category.description).toBe("some description")
        // expect(category.is_active).toBeTruthy()
        // expect(category.created_at).toBe(props.created_at)
    })

    test("id field", () => {
        let category = new Category({ name: 'Movie' })
        expect(category.id).not.toBeNull()

        category = new Category({ name: 'Movie' }, null)
        expect(category.id).not.toBeNull()

        category = new Category({ name: 'Movie' }, undefined)
        expect(category.id).not.toBeNull()

        category = new Category({ name: 'Movie' }, new UniqueEntityId())
        expect(category.id).not.toBeNull()
    })

    test("getter of name field", () => {
        const category = new Category({ name: 'Movie' })
        expect(category.name).toBe('Movie')
    })

    test("getter and setter of description field", () => {
        let category = new Category({
            name: 'Movie'
        })
        expect(category.description).toBeNull()

        category = new Category({ name: 'Movie', description: 'some description' })
        expect(category.description).toBe('some description')

        category = new Category({ name: 'Movie', description: 'some description' })
        expect(category.description).toBe('some description')

        category = new Category({
            name: 'Movie'
        })
        category['description'] = 'other description'
        expect(category.description).toBe("other description")

        category['description'] = undefined
        expect(category.description).toBeNull()
    })

    test("getter and setter of is_active field", () => {
        let category = new Category({
            name: 'Movie'
        })
        expect(category.is_active).toBeTruthy()

        category = new Category({
            name: 'Movie',
            is_active: true
        })
        expect(category.is_active).toBeTruthy()

        category = new Category({
            name: 'Movie',
            is_active: false
        })
        expect(category.is_active).toBeFalsy()
    })

    test("getter of created_at prop", () => {
        let category = new Category({
            name: 'Movie'
        })

        expect(category.created_at).toBeInstanceOf(Date)
        let created_at = new Date();
        category = new Category({
            name: "Movie",
            created_at
        })
        expect(category.created_at).toBe(created_at)
    })
})