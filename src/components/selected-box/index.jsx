import React from 'react'
import './selected-box.scss'

const SelectedBox = ({ selected }) => {
  return selected ? (
    <div
      className={'selected-box'}
      style={{
        left: selected.offsetLeft - 1,
        top: selected.offsetTop - 1,
        width: selected.offsetWidth + 2,
        height: selected.offsetHeight + 2
      }}
    >
      <div className="bg"></div>
    </div>
  ) : null
}

export default SelectedBox
