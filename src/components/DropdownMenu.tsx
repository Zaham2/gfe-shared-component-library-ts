import React from 'react'
import { DROPDOWN_MENU_STATES } from '../lib/constants'
import { RiArrowDropDownLine } from "react-icons/ri";

interface Props {
    options: string[]
    defaultValue?: string
    icon?: JSX.Element
}

const DropdownMenu = (props: Props) => {

    const [states, setStates] = React.useState<string[]>([]);
    const [icon, setIcon] = React.useState<JSX.Element>(<></>);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [selectedIndex, setSelectedIndex] = React.useState<number | null>(null);


    React.useEffect(() => {
        setStates(Array.from({ length: props.options?.length ?? 1 }, () => DROPDOWN_MENU_STATES.INITIAL))
        setIcon(props.icon ?? <></>)
        setIsMenuOpen(false)
    }, [])

    const handleOnClickMenu = (e: React.MouseEvent) => {
        e.preventDefault()
        setIsMenuOpen(!isMenuOpen)
    }

    const handleOnClickMenuItem = (index: number) => {

        if (states[index] === DROPDOWN_MENU_STATES.DISABLED) {
            return
        }

        if (selectedIndex !== null) {
            const newStates = [...states];
            newStates[selectedIndex] = DROPDOWN_MENU_STATES.INITIAL;
            setStates(newStates);
            setSelectedIndex(index)
            setIsMenuOpen(false)
            return
        }

        if (states[index] === DROPDOWN_MENU_STATES.INITIAL || states[index] === DROPDOWN_MENU_STATES.HOVER || states[index] === DROPDOWN_MENU_STATES.FOCUS) {
            const newStates = [...states];
            newStates[index] = DROPDOWN_MENU_STATES.SELECTED;
            setStates(newStates);
        }

        // if (states[index] === DROPDOWN_MENU_STATES.SELECTED) {
        //     const newStates = [...states];
        // }

        setSelectedIndex(index)
        setIsMenuOpen(false)
    }

    const handleMouseEnter = (index: number) => {
        // e.preventDefault()
        // e.currentTarget.style.backgroundColor = 'lightgray'
        if (states[index] === DROPDOWN_MENU_STATES.DISABLED || states[index] === DROPDOWN_MENU_STATES.HOVER) {
            return
        }

        if (states[index] === DROPDOWN_MENU_STATES.INITIAL || states[index] === DROPDOWN_MENU_STATES.FOCUS) {
            const newStates = [...states];
            newStates[index] = DROPDOWN_MENU_STATES.HOVER;
            setStates(newStates);
        }
    }

    const handleMouseLeave = (index: number) => {
        
        if (states[index] === DROPDOWN_MENU_STATES.DISABLED || states[index] === DROPDOWN_MENU_STATES.INITIAL) {
            return
        }

        if (states[index] === DROPDOWN_MENU_STATES.HOVER) {
            const newStates = [...states];
            newStates[index] = DROPDOWN_MENU_STATES.INITIAL;
            setStates(newStates);
        }
    }

    // const isSelectedItem = () => {

    // }

    return (
        <div className={`m-xs dropdown-menu-container size-md`}>
            <button className='p-sm selected-dropdown-item-btn' onClick={handleOnClickMenu}>{props?.options[selectedIndex ?? 0] ?? props.options[0]}<RiArrowDropDownLine style={{ fontSize: '20px' }} /></button>
            <ul className={`dropdown-menu p-md ${isMenuOpen ? '' : 'hidden'}`}>
                {Array.from({ length: props.options?.length ?? 1 }, (_, index) => {
                    return (
                        <li
                            className={`${states[index]} p-xs dropdown-option m-bottom-sm ${isMenuOpen ? '' : 'hidden'}`}
                            key={index}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={() => handleMouseLeave(index)}
                            onClick={() => handleOnClickMenuItem(index)}
                        >
                            {icon}{props.options[index]}
                        </li>
                    )

                })}
            </ul>
        </div>
    )
}

export default DropdownMenu
