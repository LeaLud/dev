import React, {useState} from 'react'

export default function Component() {

    const [text, setText] = useState()
    const [updated, setUpdated] = useState()

    const textOnChange = (event) => {
        setText(event.target.value)
    }
    const buttonOnClick = () => {
        setUpdated(text)
    }

    return (
        <div>
            <h1>newapp</h1>
            <input type="text" value={text} onChange={textOnChange}></input>
            <button onClick={buttonOnClick}>open</button>
            <p>estado base {text}</p>
            <p>estado dos {updated}</p>
        </div>
    )
}
 