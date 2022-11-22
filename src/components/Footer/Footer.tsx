import React from 'react'
import './styles.scss'

const Footer: React.FC = () => {
  const now = new Date()
  const year = now.getFullYear()

  return (
    <footer className='copyright'>
      Terrible-Blog, the worst blog that mankind has ever seen - {year} ©
    </footer>
  )
}

export default React.memo(Footer)
