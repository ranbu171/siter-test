import React from 'react'
import './header.scss'
import Button from '../../components/button/index.jsx'
import { useLocation, useNavigate } from 'react-router-dom'
import { useElementStore } from '../../store/store.js'
const Header = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const setCurrentElement = useElementStore((state) => state.setCurrentElement)
  return (
    <div className={'header'}>
      <img src="/logo.svg" alt="logo" />
      <Button
        onClick={() => {
          setCurrentElement(null)
          navigate(location?.pathname === '/preview' ? '/' : '/preview')
        }}
      >
        {location?.pathname === '/preview' ? 'Back' : 'Preview'}
      </Button>
    </div>
  )
}

export default Header
