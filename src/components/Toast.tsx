import React from 'react'
import { TOAST_VARIANTS } from '../lib/constants';

interface Props {
    state: string
    message: string
}

const Toast = (props: Props) => {

    const [state, setState] = React.useState('');

    React.useEffect(() => {
        setState(props.state ?? TOAST_VARIANTS.INFO)
    }, [])
    return (
        <div className={`${state} toast-container m-md`}>
            <div className="toast-status">
                {state}
            </div>
            <div className="toast-text">
                {props.message}
            </div>
        </div>
    )
}

export default Toast
