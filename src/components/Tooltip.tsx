import React from 'react'
import { TOOLTIP_ALIGNMENTS, TOOLTIP_POSITIONS } from '../lib/constants';

interface Props {
    children: React.ReactNode
    tip?: string
    alignment?: string
    position?: string
}

const Tooltip = (props: Props) => {


    const [isHovered, setIsHovered] = React.useState(false);
    const [alignment, setAlignment] = React.useState<string | null>(null);
    const [position, setPosition] = React.useState<string | null>(null);
    const [tip, setTip] = React.useState<string>('');

    React.useEffect(() => {
        setIsHovered(false);
        setPosition(props.position ?? TOOLTIP_POSITIONS.TOP);  // tip
        setAlignment(props.alignment ?? TOOLTIP_ALIGNMENTS.END);   // tip arrow
        setTip(props.tip ?? '');
    }, [])

    return (
        <>
            <div className={`tooltip-container`} onMouseLeave={() => { setIsHovered(false) }}>
                <div className={`tip p-sm ${position} ${!isHovered && 'hidden'}`}>
                    <span className={`tip-arrow ${alignment}`}/>
                    {tip}
                </div>
                <div className='child' onMouseOver={() => setIsHovered(true)}>{props.children}</div>
            </div>
        </>
    )
}

export default Tooltip
