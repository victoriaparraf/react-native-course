

export const BasicFunctions = () => {

    const addTwoNumbers = (a: number, b: number): number => {
        return a + b
    }

    return (
        <>
            <h3>Basic Functions</h3>
            <p>2 + 3 = {addTwoNumbers(2, 3)}</p>
        </>
    )
}

