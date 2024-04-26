
import React, { useState } from 'react';

const HookUseState = () => {
    
    const [value, setValue] = useState(0) 

    const updateValue = () => {
        setValue(value + 1)
    }

    return (
        <button onClick={updateValue}>
            {value}
        </button>
    )
}

export default HookUseState
    