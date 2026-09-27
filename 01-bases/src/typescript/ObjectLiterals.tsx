interface Person {
    name: string
    age: number
    isEmployed: boolean
    address: Address
}

interface Address {
    street?: string
    city: string
    country: string
}

export const ObjectLiterals = () => {

    const person: Person = {
        name: 'Victor',
        age: 30,
        isEmployed: true,
        address: {
            street: '123 Main St',
            city: 'New York',
            country: 'USA'
        }
    }

    return (
        <>
            <h3>Object Literals</h3>
            <pre>{JSON.stringify(person, null, 2)}</pre>
        </>
    )
}

export default ObjectLiterals
