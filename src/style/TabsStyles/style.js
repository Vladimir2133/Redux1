import styled, { css } from 'styled-components'

const Tabs = styled.div`
  overflow: hidden;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
`

const dark = css`
  background-color: #696969;
  color: white;
`

const light = css`
  background-color: #eee;
  color: black;
`

const themes = {
  light: light,
  dark: dark
}

const ButtonStyle = styled.button`
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;
  -webkit-user-select: none;

  ${({ theme }) => themes[theme]};
  ${({ isActive }) =>
    isActive &&
    css`
      background-color: #1e90ff;
    `};

  &:hover {
    background-color: #bcbaba;
  }
`


const TabContent = styled.div`
  width: 100%;
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-top: none;
`
export { Tabs, ButtonStyle, TabContent }
