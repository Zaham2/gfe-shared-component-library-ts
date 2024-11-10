import React from 'react'
import { TEXT_INPUT_INVALID_TEXT, TEXT_INPUT_TYPES } from '../lib/constants'

interface Props {
  placeholder?: string
  inputType?: string
  label?: string
  hint?: string
}

const TextInput = (props: Props) => {

  const [placeholder, setPlaceholder] = React.useState('');
  const [inputType, setInputType] = React.useState('');
  const [label, setLabel] = React.useState('');
  const [hint, setHint] = React.useState('');
  const [isValid, setIsValid] = React.useState(true);

  React.useEffect(() => {
    setPlaceholder(props.placeholder ?? "Enter Text");
    setLabel(props.label ?? 'Text Input Label');
    setInputType(props.inputType ?? TEXT_INPUT_TYPES.TEXT);
    setHint(props.hint ?? 'Hint');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const currentValue = e.target.value;

    if (currentValue === '') {
      setIsValid(true);
      setHint(props.hint ?? '');
    } else if (inputType === TEXT_INPUT_TYPES.EMAIL && !(isValidEmail(currentValue))) {
      setIsValid(false);
      setHint(TEXT_INPUT_INVALID_TEXT.EMAIL)
    } else if (inputType === TEXT_INPUT_TYPES.PASSWORD && currentValue.length < 8) {
      setIsValid(false);
      setHint(TEXT_INPUT_INVALID_TEXT.PASSWORD)
    } else {
      setIsValid(true);
      setHint(props.hint ?? '');
    }
  }

  return (
    <div className={`text-input-container ${!isValid ? 'invalid' : ''}`}>
      <label className='label' htmlFor={label}>{label}</label>
      <input className='input' type={inputType} placeholder={placeholder} onChange={handleOnChange} />
      <p className="hint">{hint}</p>
    </div>
  )
}

function isValidEmail(input: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input);
}

export default TextInput
