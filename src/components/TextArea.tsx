import React from 'react'

interface Props {
    rows?: number
    cols?: number
    name?: string
    placeholder?: string
    maxLength?: number
    form?: string
    disabled?: boolean
    required?: boolean

    label?: string
    hint?: string
}

const TextArea = (props: Props) => {

    const [textareaLabel, setTextareaLabel] = React.useState('');
    const [maxLength, setMaxLength] = React.useState(500);
    const [hint, setHint] = React.useState('');
    const [isValid, setIsValid] = React.useState(false);
    const [nChars, setNChars] = React.useState(0);

    React.useEffect(() => {
        setIsValid(true);
        setTextareaLabel(props.label ?? "Textarea Label");
        setMaxLength(props.maxLength ?? 500);
        setHint(props.hint ?? 'Hint');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // const handleIsInvalid = () => {
    //     setIsValid(false);
    // }

    const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const currentValue = e.target.value;
        setNChars(currentValue.length);
    }

    return (
        <div className={`textarea-container ${!isValid && 'textarea-invalid'}`}>
            <p className="textarea-label">{textareaLabel}</p>
            <textarea
                className='textarea-input'
                name={props?.name}
                rows={props?.rows}
                cols={props?.cols}
                maxLength={props.maxLength ?? 500}
                form={props?.form}
                disabled={props?.disabled}
                required={props?.required}
                placeholder={props?.placeholder}
                // onInvalid={handleIsInvalid}
                onChange={handleOnChange}

            />
            <div className="textarea-info">
                <p className="textarea-hint">{hint}</p>
                <p className="textarea-limits">{nChars} / {maxLength}</p>
            </div>
        </div>
    )
}

export default TextArea
