import { useState, useEffect } from 'react';

const Typewriter = ({text, speed}) => {
    const [currText, setCurrText] = useState('');
    const [currIndex, setCurrIndex] = useState(0);

    useEffect(() => {
        if (currIndex < text.length) {
            const timeout = setTimeout(()=> {
                setCurrText(prevText => prevText + text[currIndex]);
                setCurrIndex(prevIndex => prevIndex + 1)
            }, speed)
            return() => clearTimeout(timeout)
        }
    }, [currIndex, speed, text])


    return <span>{currText}</span>

}

export default Typewriter