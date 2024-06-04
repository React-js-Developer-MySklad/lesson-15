import {useEffect, useState} from "react";

type ComplexType = {
    id: number
    name: string
    profile: {
        avatar: string
        subscriptions: string[]
    }
}

export const UseStatePage = () => {
    const [counter, setCounter] = useState(0)
    const [complex, setComplex] = useState<ComplexType>(
        {
            id: 1,
            name: 'Name',
            profile: {
                avatar: '123',
                subscriptions: ['1', '2', '3']
            }
    })

    useEffect(() => {

        console.log('Complex has been changed')

    }, [complex]);

    const onCount = () => setCounter(counter + 1);

    const onCountSeries = () => {
        setCounter(counter => counter + 1)
        setCounter(counter => counter + 1)
        setCounter(counter => counter + 1)
        setCounter(counter => counter + 1)
    }

    const onComplexChanged = () => {
        // setComplex(complex => {
        //     complex.name = 'Changed Name'
        //     return complex
        // })
        setComplex(complex => (
            {
                ...complex,
                profile: {
                    ...complex.profile, avatar: 'new value'
                }
            }))
    }

    return (
        <div>
            {counter}
            <div>
                <button onClick={onCount}> Count </button>
                &nbsp;
                <button onClick={onCountSeries}> Count Series </button>
            </div>
            <div>
                <button onClick={onComplexChanged}> Complex Changed </button>
            </div>
        </div>
    )
}


