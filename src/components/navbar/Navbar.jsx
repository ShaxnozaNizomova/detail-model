import React from 'react'
import './Navbar.css'
import topnav from '../../assets/images/topnav2.svg'
import topnav2 from '../../assets/images/topnav.svg'
import logo from '../../assets/images/logo.svg'
function Navbar() {
  return (
    <div>
      <div className='topnavbar'>
      <div className='topnav'>
      <div>
     <img src={topnav} alt="topnav"/>
      </div>
      <div>
    <img src={topnav2} alt="topnav2"/>
      </div>
      </div>
      </div>
      <div className='navbar'>
        <ul className='navbar__menu'>
            <li className='menu__link'>СЛАДКИЕ ДНИ</li>
            <li className='menu__link'>подарочные наборы</li>
            <li className='menu__link'>Собрать набор</li>
            <li className='menu__link'><img src={logo} alt="logo" /></li>
            <li className='menu__link'>Создать дизайн</li>
            <li className='menu__link'>КОМПАНИЯМ</li>
            <li className='menu__link'> ВЕСЬ КАТАЛОГ</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
