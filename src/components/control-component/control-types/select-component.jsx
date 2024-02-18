import React from 'react'
import Select from 'react-select'
import { useElementStore } from '../../../store/store.js'

const SelectComponent = ({ options, data_key }) => {
  const { value, setParameter } = useElementStore((state) => ({
    value: state.parameters[data_key],
    setParameter: state.setParameter
  }))
  return (
    <>
      <Select
        isSearchable={false}
        className={'select'}
        classNamePrefix="select"
        value={value}
        onChange={(val) => setParameter(data_key, val)}
        options={options}
      />
      <p></p>
    </>
  )
}

export default SelectComponent
