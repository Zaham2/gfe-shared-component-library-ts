import React from 'react'
import { TAB_MENU_SIZES, TAB_MENU_STATES } from '../lib/constants'

interface Props {
    tabs?: string[]
    size?: string

}

const TabMenu = (props: Props) => {

    const [size, setSize] = React.useState('')
    const [tabs, setTabs] = React.useState<string[]>([]);
    const [tabButtonStates, setTabButtonStates] = React.useState<string[]>([]);

    React.useEffect(() => {
        setSize(props.size ?? TAB_MENU_SIZES.MEDIUM);
        setTabs(props.tabs ?? ["Tab 1"])
        setTabButtonStates(Array.from({ length: tabs.length }, () => TAB_MENU_STATES.INITIAL) ?? [TAB_MENU_STATES.INITIAL])
    }, [])

    const handleMouseDown = (index: number) => {
        const newTabButtonStates = [...tabButtonStates];
        newTabButtonStates[index] = TAB_MENU_STATES.FOCUS;
        setTabButtonStates(newTabButtonStates);
    }

    const handleMouseUp = (index: number) => {
        const newTabButtonStates = [...tabButtonStates];
        newTabButtonStates[index] = TAB_MENU_STATES.INITIAL;
        setTabButtonStates(newTabButtonStates);
    }

    const handleMouseEnter = (index: number) => {
        if (tabButtonStates[index] === TAB_MENU_STATES.FOCUS || 
            tabButtonStates[index] === TAB_MENU_STATES.DISABLED
        ) {
            return
        }

        if(tabButtonStates[index] === TAB_MENU_STATES.INITIAL) {
            const newTabButtonStates = [...tabButtonStates];
            newTabButtonStates[index] = TAB_MENU_STATES.HOVER;
            setTabButtonStates(newTabButtonStates);
        }
    }

    const handleMouseLeave = (index: number) => {
        if(tabButtonStates[index] === TAB_MENU_STATES.FOCUS) {
            return
        }
        const newTabButtonStates = [...tabButtonStates];
        newTabButtonStates[index] = TAB_MENU_STATES.INITIAL;
        setTabButtonStates(newTabButtonStates);
    }

    return (
        <div className={`container size-${size}`}>
            <div className="buttons-container">
                {
                    Array.from({ length: tabs.length }, (_, index) => (
                        <button
                            key={index}
                            className={`tab-menu-btn ${tabButtonStates[index]}`}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={() => handleMouseLeave(index)}
                            onMouseDown={() => handleMouseDown(index)}
                            onMouseUp={() => handleMouseUp(index)}
                        >
                            {tabs[index]}
                        </button>

                    ))
                }
            </div>
            <p className="tab-menu-text p-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus doloribus alias in magnam explicabo illo quod laborum! Deserunt in asperiores mollitia culpa doloremque! Corrupti eos tempora hic omnis eius reprehenderit!</p>
        </div>
    )
}

export default TabMenu
