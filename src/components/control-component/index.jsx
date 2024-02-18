import React, { memo, useMemo } from 'react'
import './control-component.scss'
import SliderComponent from './control-types/slider-component.jsx'
import 'rc-slider/assets/index.css'
import SelectComponent from './control-types/select-component.jsx'
import SwitchComponent from './control-types/switch-component.jsx'

const controls = {
  slider: SliderComponent,
  select: SelectComponent,
  switch: SwitchComponent
}
const ControlComponent = memo(({ title, type, ...props }) => {
  const CurrentControl = useMemo(() => controls[type] || (() => <div>null</div>), [type])

  return (
    <>
      <p className="control_title">{title}</p>
      {CurrentControl ? <CurrentControl {...props} /> : null}
    </>
  )
})

export default ControlComponent
