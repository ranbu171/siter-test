import React, { useCallback, useRef } from 'react'
import './main-page.scss'
import Sidebar from '../../layout/sidebar/index.jsx'
import SelectedBox from '../../components/selected-box/index.jsx'
import { useElementStore } from '../../store/store.js'
import AnimationBlock from '../../components/animation-block/index.jsx'
const MainPage = () => {
  const { setCurrentElement, currentElementId } = useElementStore((state) => ({
    setCurrentElement: state.setCurrentElement,
    currentElementId: state.currentElementId
  }))
  const ref = useRef(null)

  const handleSelect = useCallback(
    (e) => {
      const new_value = currentElementId === e?.target?.id ? null : e?.target
      ref.current = new_value
      setCurrentElement(new_value?.id)
    },
    [currentElementId]
  )
  return (
    <div className={'mainPage'}>
      <div className="mainPage_constructorBox">
        <div className="constructor_page">
          <SelectedBox selected={ref?.current} />
          <AnimationBlock selected={ref?.current} />
          <div className="info_block">
            <h1 id={'1'} onClick={handleSelect}>
              Animation Settings
            </h1>
            <p id={'2'} onClick={handleSelect}>
              The user should have the option to select any element on the page and set up its
              animation using the controls in the right panel. A dotted line will show the element's
              position and state before the animation begins, giving the user a clear idea of how
              the animation will appear. The preview button on the top panel will open the result in
              a new tab.
            </p>
            <button id={'3'} onClick={handleSelect}>
              Button
            </button>
          </div>
          <img id={'4'} src="/demo.png" alt="demo-image" onClick={handleSelect} />
        </div>
      </div>
      <Sidebar />
    </div>
  )
}

export default MainPage
