import React, { useCallback } from 'react'
import Slider from 'rc-slider'
import { useElementStore } from '../../../store/store.js'

const SliderComponent = ({ min, max, step, startPoint, data_key, value_type }) => {
  const { value, setParameter } = useElementStore((state) => ({
    value: state.parameters[data_key],
    setParameter: state.setParameter
  }))
  const handleChange = useCallback((e) => {
    setParameter(data_key, e)
  }, [])
  return (
    <>
      <div className="control-type_container">
        <Slider
          startPoint={startPoint}
          min={min}
          max={max}
          value={value}
          step={step}
          onChange={handleChange}
        />
      </div>
      <p className={'control_value'}>
        {value}
        {value_type}
      </p>
    </>
  )
}

export default SliderComponent
