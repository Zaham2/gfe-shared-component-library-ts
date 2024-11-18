import React from 'react'
import { FaToggleOff, FaToggleOn } from 'react-icons/fa'
import { TOGGLE_SIZES, TOGGLE_STATES } from '../lib/constants';

interface Props {
    initialState?: string
    size?: string
}

const Toggle = (props: Props) => {

    const [toggleState, setToggleState] = React.useState<string | null>(null);
    const [size, setSize] = React.useState<string | null>(null);

    React.useEffect(() => {
        if (props.initialState) {
            setToggleState(props.initialState ?? TOGGLE_STATES.INITIAL);
        }
        setSize(props.size ?? TOGGLE_SIZES.SMALL)
    }, [])

    const handleOnClick = () => {
        if (toggleState === TOGGLE_STATES.DISABLED) {
            return
        }
        if (toggleState === TOGGLE_STATES.INITIAL) {
            setToggleState(TOGGLE_STATES.FOCUS)
        } else if (toggleState === TOGGLE_STATES.FOCUS) {
            setToggleState(TOGGLE_STATES.INITIAL)
        }
    }

    return (
        <div
            onClick={handleOnClick}
            className={`toggle-container p-right-xs p-left-xs size-${size} ${toggleState}`}
        >
            {toggleState === TOGGLE_STATES.FOCUS ? <FaToggleOn /> : <FaToggleOff />}
        </div>
    )
}

export default Toggle
