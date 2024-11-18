import React from 'react'
import { TABS_COMPONENT_STATES } from '../lib/constants'

interface Props {
  tabs?: string[]
}

const TabsComponent = (props: Props) => {

  const [tabs, setTabs] = React.useState<string[]>([])
  const [tabsStates, setTabsStates] = React.useState<string[]>([])
  // const [activeTabBarWidth, setActiveTabBarWidth] = React.useState(0)
  // const [activeTabBarOffset, setActiveTabBarOffset] = React.useState(0)
  // const ref = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const defaultTab = ['Tab 1']
    setTabs(props.tabs ?? defaultTab)
    // setActiveTabBarWidth((1 / (props.tabs ?? defaultTab).length) * 100)
    setTabsStates(Array.from({ length: tabs.length }, () => TABS_COMPONENT_STATES.INITIAL) ?? [TABS_COMPONENT_STATES.FOCUS])
    // const { width } = ref.current?.getBoundingClientRect() ?? { width: 0 }
    // const { width2 } = ref2.current?.getBoundingClientRect() ?? { width: 0 }

    // setActiveTabBarOffset(width2 / (props.tabs))
  }, [])

  React.useEffect(() => {

  }, [tabsStates])

  const handleOnClick = (index: number) => {
    if (tabsStates[index] === TABS_COMPONENT_STATES.FOCUS) {
      return
    }

    const newTabsStates: string[] = [...tabsStates];
    tabsStates.forEach((_, tabIndex) => {
      if (tabIndex !== index) {
        newTabsStates[tabIndex] = TABS_COMPONENT_STATES.INITIAL;
      } else {
        newTabsStates[tabIndex] = TABS_COMPONENT_STATES.FOCUS
      }
    })

    setTabsStates(newTabsStates);
  }

  return (
    <div className="tabs-component-container">
      <div className="tabs-container">
        <div className='tabs-full-bottom-bar'>
          {
            Array.from({ length: tabs.length }, (_, index) => (
              <>
                <button
                  key={index}
                  className={`tab`}
                  onClick={() => handleOnClick(index)}
                >
                  {tabs[index]}
                <div className='active-tab' style={{
                  width: '100%',
                }} />
                </button>
              </>

            ))
          }
        </div>
      </div>
      {/* <div className='tabs-container'> */}
      {/* {
          Array.from({ length: tabs.length }, (_, index) => (
            <>
              <button
                key={index}
                className={`tab`}
                onClick={() => handleOnClick(index)}
              >
                {tabs[index]}
              </button>
              <div className='active-tab' style={{
                width: '10%',
              }} />
            </>

          ))
        }
      </div>
      <div ref={ref} className='tabs-full-bottom-bar m-top-xs'>
      </div> */}
      <p className="tabs-component-text p-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quaerat provident similique placeat, nesciunt eius itaque nulla deleniti esse iste quo in rem hic, et veniam magni error. Sit, et.</p>
    </div>
  )
}

export default TabsComponent
