import React, { useEffect, useState } from 'react'
import './preview-page.scss'
import AnimatedDiv from '../../components/animated-div/index.jsx'
const PreviewPage = () => {
  const [elements, setElements] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setElements(JSON.parse(localStorage.getItem('element_animations')) || [])
    setLoading(false)
  }, [])
  return loading ? null : (
    <div className={'preview-page'}>
      <div className="preview_box">
        <div className="info_block">
          <AnimatedDiv key={1} {...(elements.find((e) => e.id === '1')?.parameters || {})}>
            <h1 id={'1'}>Animation Settings</h1>
          </AnimatedDiv>
          <AnimatedDiv key={2} {...(elements.find((e) => e.id === '2')?.parameters || {})}>
            <p id={'2'}>
              The user should have the option to select any element on the page and set up its
              animation using the controls in the right panel. A dotted line will show the element's
              position and state before the animation begins, giving the user a clear idea of how
              the animation will appear. The preview button on the top panel will open the result in
              a new tab.
            </p>
          </AnimatedDiv>
          <AnimatedDiv key={3} {...(elements.find((e) => e.id === '3')?.parameters || {})}>
            <button id={'3'}>Button</button>
          </AnimatedDiv>
        </div>
        <AnimatedDiv key={4} {...(elements.find((e) => e.id === '4')?.parameters || {})}>
          <img id={'4'} src="/demo.png" alt="demo-image" />
        </AnimatedDiv>
      </div>
    </div>
  )
}

export default PreviewPage
