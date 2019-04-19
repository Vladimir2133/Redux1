import React from 'react'
// hoc(s)
import { WithAccordion } from 'libs/Accordion/withAccordion'
// constants
import { Acc } from 'constants/Accordions/AccConsts'
// component
import { FirstAccordion } from 'components/Accordion/FirstAccordion'
import { SecondAccordion } from 'components/Accordion/SecondAccordion'
import { ThirdAccordion } from 'components/Accordion/ThirdAccordion'
// styles
import { AccordionStyle, AccButton, AccContent, IconAcc } from 'style/AccordionStyles/AccordionStyle'

const Content = 'simple text'
const Accordion = ({ activeAcc, handleActiveAcc, handleChangeImg }) => (
  <div>
    {Acc.map(({ title, AccIndex }, ind) => (
      <AccordionStyle key={ind}>
        <AccButton onClick={handleActiveAcc(AccIndex)}>
          {title}
          <IconAcc imgactive={handleChangeImg(AccIndex)}> </IconAcc>
        </AccButton>
        <AccContent>
          {activeAcc[AccIndex] && AccIndex === 'ONE' && <FirstAccordion text={Content} />}
          {activeAcc[AccIndex] && AccIndex === 'TWO' && <SecondAccordion />}
          {activeAcc[AccIndex] && AccIndex === 'THREE' && <ThirdAccordion />}
        </AccContent>
      </AccordionStyle>
    ))}
  </div>
)

export default WithAccordion(Accordion)
