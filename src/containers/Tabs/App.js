import React, { Fragment, useContext } from 'react'
// components
import { WithTabs } from 'libs/Tabs/withTabs'
import { Print } from 'components/Table/PrintData'
import  ThirdTab  from 'components/Tabs/ThirdTab'
import { ThemeButtons } from 'components/ThemeButtons'
import  SquareButtons  from "components/SquareButtons/squareButtons";
import Accordion from 'containers/Accordion'
// constants
import { tabNames, tabs } from 'constants/Tabs/tabs'
import { Titles, TitleArray } from 'constants/Table/const'
// style
import { Tabs, ButtonStyle, TabContent } from 'style/TabsStyles/style'
// context
import { ThemeContext } from 'context/contextCreate'
//redux
import { onIncrement } from 'reducers/counter'



const App = () => {
  const { themeColor } = useContext(ThemeContext)

  return (
    <>
      <section>
          <ThemeButtons />
          <SquareButtons />
      </section>
      <WithTabs>
        {({ activeTab, setActiveTab }) => (
          <Fragment>
            <Tabs>
              {tabs.map(({ title, tabIndex }, ind) => (
                <ButtonStyle
                  key={ind}
                  onClick={setActiveTab(tabIndex)}
                  isActive={tabIndex === activeTab}
                  theme={themeColor}
                >
                  {title}
                </ButtonStyle>
              ))}
            </Tabs>
            <TabContent>
              {activeTab === tabNames.FIRST && <Accordion />}
              {activeTab === tabNames.SECOND && <Print titles={Titles} data={TitleArray} />}
              {activeTab === tabNames.THIRD && <ThirdTab />}
            </TabContent>
          </Fragment>
        )}
      </WithTabs>
    </>
  )
}


export default App
