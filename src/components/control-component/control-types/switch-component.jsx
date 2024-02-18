import React from 'react'
import ReactSwitch from 'react-switch'
import { useElementStore } from '../../../store/store.js'

const SwitchComponent = ({ data_key }) => {
  const { value, setParameter } = useElementStore((state) => ({
    value: state.parameters[data_key],
    setParameter: state.setParameter
  }))
  return (
    <>
      <ReactSwitch
        handleDiameter={8}
        height={12}
        width={20}
        checkedIcon={false}
        uncheckedIcon={false}
        checked={!!value}
        onChange={(e) => setParameter(data_key, e)}
      />
      <p></p>
    </>
  )
}

export default SwitchComponent
