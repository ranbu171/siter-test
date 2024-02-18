import React from 'react'
import './sidebar.scss'
import ControlComponent from '../../components/control-component/index.jsx'
import { useElementStore } from '../../store/store.js'
import { mocked_controls } from '../../utils/controls.js'

const Sidebar = () => {
  const currentElementId = useElementStore((state) => state.currentElementId)
  return (
    <div className={`sidebar ${currentElementId ? '' : 'disabled'}`}>
      <div className="sidebar_grid-container">
        {mocked_controls.map((control, index) => (
          <ControlComponent key={index} {...control} />
        ))}
      </div>
    </div>
  )
}

export default Sidebar
