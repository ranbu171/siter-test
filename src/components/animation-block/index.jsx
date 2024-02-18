import React, { useEffect, useRef, useState } from 'react'
import './animation-block.scss'
import { useElementStore } from '../../store/store.js'
const AnimationBlock = ({ selected }) => {
  const containerRef = useRef(null)
  const [currentId, setCurrentId] = useState(null)
  const { position_x, position_y, blur, opacity, scale } = useElementStore((state) => ({
    ...state.parameters
  }))
  useEffect(() => {
    if (containerRef.current) {
      if (currentId && currentId !== selected?.id) {
        containerRef.current.removeChild(containerRef.current.lastChild)
      }
      if (selected) {
        const clone = selected.cloneNode(true)
        containerRef.current.appendChild(clone)
      }
    }
    setCurrentId(selected?.id)
  }, [selected?.id])
  return selected ? (
    <div
      className="animation-block"
      style={{
        left: selected?.offsetLeft - 1 + position_x,
        top: selected?.offsetTop - 1 + position_y,
        width: selected?.offsetWidth + 2,
        height: selected?.offsetHeight + 2,
        transform: `scale(${scale})`
      }}
    >
      <div className="small-box right-top"></div>
      <div className="small-box left-top"></div>
      <div className="small-box right-bottom"></div>
      <div className="small-box left-bottom"></div>
      <div
        className="value_container"
        ref={containerRef}
        style={{
          width: '100%',
          height: '100%',
          filter: `blur(${blur}px)`,
          opacity: opacity / 100
        }}
      ></div>
    </div>
  ) : null
}

export default AnimationBlock
