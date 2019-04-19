import React, { useState } from 'react'
import { tabNames } from 'constants/Tabs/tabs'

function WithTabs(props) {
  const [activeTab, setActiveTab] = useState(tabNames.FIRST)

  const handleTabChange = tabName => () => setActiveTab(tabName)

  return (
    <div>
      {props.children({
        activeTab: activeTab,
        setActiveTab: handleTabChange
      })}
    </div>
  )
}

export { WithTabs }
