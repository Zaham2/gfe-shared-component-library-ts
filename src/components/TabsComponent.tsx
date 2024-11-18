import React from 'react'
import { TABS_COMPONENT_STATES } from '../lib/constants';

interface Props {
  tabs?: string[]
}

const TabsComponent = (props: Props) => {

  const [tabs, setTabs] = React.useState<string[]>([]);
  const [tabsStates, setTabsStates] = React.useState<string[]>([])

  React.useEffect(() => {
    const defaultTab = ['Tab 1']
    setTabs(props.tabs ?? defaultTab)
    setTabsStates(Array.from({ length: tabs.length }, (_, index) => index === 0 ? TABS_COMPONENT_STATES.FOCUS : TABS_COMPONENT_STATES.INITIAL) ?? [TABS_COMPONENT_STATES.FOCUS])
  }, [])

  // React.useEffect(() => {

  // }, [tabsStates])

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
    <div className='tabs-component-container'>
      <div className="tabs-container">
        {Array.from({ length: tabs.length }, (_, index) => (
          <div className={`tab`}>
            <div
              key={index}
              className={`tab-btn p-bottom-sm`}
              onClick={() => handleOnClick(index)}
            >
              {tabs[index]}
            </div>
            {
              tabsStates[index] === TABS_COMPONENT_STATES.FOCUS &&
              <div className='active-tab' style={{
                width: '100%',
              }} />
            }
          </div>
        ))}
      </div>
      <div className="tabs-full-bottom-bar" />
      <p className="tabs-component-text p-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, maiores ipsum praesentium voluptatum molestiae unde blanditiis sapiente quam assumenda nesciunt similique consequuntur. Minus consequatur odit mollitia repudiandae fuga ipsum delectus.</p>
    </div>
  )
}

export default TabsComponent

