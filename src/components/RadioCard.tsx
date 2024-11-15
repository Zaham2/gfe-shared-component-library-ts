import React from 'react'
import { RiArrowDropDownLine, RiCalendarTodoLine, RiCalendarEventFill, RiCalendar2Line } from "react-icons/ri";
import { RADIO_CARD_STATES, RADIO_ICON_POSITIONS, RADIO_ICON_TYPES } from '../lib/constants';

interface Props {
    state?: string
    heading?: string
    text?: string
    showArrow?: boolean
    iconType?: string
    iconPosition?: string
}

const RadioCard = (props: Props) => {

    const [radioCardState, setRadioCardState] = React.useState<string | null>(null);
    const [radioCardHeading, setRadioCardHeading] = React.useState<string | null>(null);
    const [radioCardText, setRadioCardText] = React.useState<string | null>(null);
    const [showArrow, setShowArrow] = React.useState(false);
    const [iconPosition, setIconPosition] = React.useState(RADIO_ICON_POSITIONS.LEFT);

    React.useEffect(() => {
        setRadioCardState(props.state ?? RADIO_CARD_STATES.NORMAL);
        setRadioCardHeading(props.heading ?? null);
        setRadioCardText(props.text ?? null);
        setShowArrow(props.showArrow ?? false);
        setIconPosition(props.iconPosition ?? RADIO_ICON_POSITIONS.LEFT);
    }, [])

    const handleIconType = () => {
        switch (props.iconType) {
            case RADIO_ICON_TYPES.MONTHLY:
                return <RiCalendarTodoLine className='radio-card-icon font-size-2xl' />;
            case RADIO_ICON_TYPES.WEEKLY:
                return <RiCalendarEventFill className='radio-card-icon font-size-2xl' />;
            case RADIO_ICON_TYPES.ANNUALLY:
                return <RiCalendar2Line className='radio-card-icon font-size-2xl' />;
            default:
                return null;
        }
    }

    const shouldShowText = !!props.text

    const isLeftIcon = (iconPosition !== RADIO_ICON_POSITIONS.RIGHT && iconPosition === RADIO_ICON_POSITIONS.LEFT)
    const isRightIcon = (iconPosition === RADIO_ICON_POSITIONS.RIGHT && iconPosition !== RADIO_ICON_POSITIONS.LEFT)
    const hasHeading = !!radioCardHeading

    const handleOnMouseDown = () => {
        if (radioCardState === RADIO_CARD_STATES.DISABLED) {
            return
        }

        if (radioCardState !== RADIO_CARD_STATES.FOCUS) {
            setRadioCardState(RADIO_CARD_STATES.FOCUS);
        }

    };

    const handleOnMouseUp = () => {
        if (radioCardState === RADIO_CARD_STATES.DISABLED)
            return

        if (radioCardState === RADIO_CARD_STATES.FOCUS) {
            setRadioCardState(RADIO_CARD_STATES.NORMAL);
        }

    };

    return (
        <div className='container m-top-xl'>
            {hasHeading && <label className='radio-card-label font-size-xl'>{radioCardHeading}</label>}
            <button
                className={`radio-card p-left-lg p-right-lg p-top-md p-bottom-md ${radioCardState}`}
                onMouseDown={handleOnMouseDown}
                onMouseUp={handleOnMouseUp}
            >
                {isLeftIcon && handleIconType()}
                {shouldShowText && <p className="font-size-md radio-card-text">{radioCardText}</p>}
                {showArrow && iconPosition !== RADIO_ICON_POSITIONS.RIGHT && <RiArrowDropDownLine className='radio-card-icon font-size-2xl' />}
                {isRightIcon && handleIconType()}
            </button>
        </div>
    )
}

export default RadioCard
