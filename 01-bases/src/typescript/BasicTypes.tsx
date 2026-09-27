export const BasicTypes = () => {

    const name: string = 'Victor';
    const age: number = 30;
    const isStudent: boolean = true;

    const powers: string[] = ['Invisibility', 'Flight', 'Super Strength'];  

    return (
        <>
            <h2>Basic Types</h2>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Is Student: {isStudent ? 'Yes' : 'No'}</p>
            <p>Powers: {powers.join(', ')}</p>
        </>
    )
}

export default BasicTypes
