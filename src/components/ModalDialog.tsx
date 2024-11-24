import React from 'react'
import { MODAL_VARIANTS } from '../lib/constants';

interface Props {
    state?: string
    title: string
    body: string
}

const ModalDialog = (props: Props) => {

    const [state, setState] = React.useState(MODAL_VARIANTS.PRIMARY);
    const [title, setTitle] = React.useState('');
    const [body, setBody] = React.useState('');

    React.useEffect(() => {
        setState(props.state ?? MODAL_VARIANTS.PRIMARY);
        setTitle(props.title);
        setBody(props.body);
    }, [])

    return (
        <div className='modal-dialog-overlay'>
            <div className='modal-dialog-container'>
                <div className={`modal-dialog  p-md`}>
                    <h1 className='modal-title p-left-md'>{title}</h1>
                    <p className="modal-body p-left-md">{body}</p>
                    <div className={`${state} modal-dialog-buttons-container`}>
                        <button className="modal-left-btn p-xs">No</button>
                        <button className={`modal-right-btn p-xs ${state}`}>Yes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalDialog
