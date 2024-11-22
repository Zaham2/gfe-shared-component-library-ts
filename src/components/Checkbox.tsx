import React from 'react'
import { CHECKBOX_STATES } from '../lib/constants';

interface Props {
    boxLabel?: string
    boxState?: string
}

const Checkbox = (props: Props) => {

    const [label, setLabel] = React.useState('');
    const [state, setState] = React.useState('');

    React.useEffect(() => {
        setLabel(props.boxLabel ?? 'Checkbox Label');
        setState(props.boxState ?? CHECKBOX_STATES.INDETERMINATE);
    }, [])

    // Rea

    const handleOnClick = () => {
        if(state === CHECKBOX_STATES.DISABLED) {
            return
        }
        if (state === CHECKBOX_STATES.UNCHECKED) {
            setState(CHECKBOX_STATES.CHECKED);
        } else if (state === CHECKBOX_STATES.CHECKED) {
            setState(CHECKBOX_STATES.UNCHECKED);
        } else if (state === CHECKBOX_STATES.INDETERMINATE) {
            setState(CHECKBOX_STATES.CHECKED);
        }
    }


    return (
        <div className={`checkbox-container ${state}`}>
            <input
                className={`checkbox-input ${state}`}
                type="checkbox"
                value={label}
                checked={state === CHECKBOX_STATES.CHECKED}
                onClick={handleOnClick}
            />
            {label}
        </div>
    )
}

export default Checkbox
