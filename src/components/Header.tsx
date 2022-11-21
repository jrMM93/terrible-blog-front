import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './styles.scss'

export type CategoryType = {
  route: string
  label: string
}

type HeaderProps = {
  categories: CategoryType[]
  isLoading: boolean
}
const Header: React.FC<HeaderProps> = ({ categories }) => {
  const navigate = useNavigate()
  return (
    <header className='menu'>
      <nav>
        {categories.map(({ route, label }) => (
          <NavLink
            key={route}
            className={({ isActive }) => (isActive ? 'menu-link menu-link--active' : 'menu-link')}
            to={route}
          >
            {label}
          </NavLink>
        ))}
        <button className='menu-login' type='button' onClick={() => navigate('/login')}>
          Login
        </button>
        <button className='menu-register' type='button' onClick={() => navigate('/register')}>
          Register
        </button>
      </nav>
    </header>
  )
}

export default React.memo(Header)
