import React from 'react'
import insta from '../../assets/images/instagram.svg'
import facebook from '../../assets/images/facebook.svg'
import wikipedia from '../../assets/images/vk.svg'
import icon1 from '../../assets/images/icon1.svg'
import icon2 from '../../assets/images/icon2.svg'
import icon3 from '../../assets/images/icon3.svg'
import './Footer.css'
function Footer() {
  return (
    <div className='footer'>
      <div className='footer__items'>
      <div className='item1'>
        <div className='item__icons'>
            <div>
                <img src={icon1} alt="" />
                <p className='icons__text'>Готовим вручную Bи c любовью</p>
            </div>
            <div>
                <img src={icon2} alt="" />
                <p className='icons__text'>Доставимв день заказа</p>
            </div>
            <div>
                <img src={icon3} alt="" />
                <p className='icons__text'>100% миндальная мукаи натуральные ингредиенты</p>
            </div>
        </div>
        <p className='item1__text'>© 2021 МакароншопООО <br /> "Квантум", Санкт-Петербург, улица Маршала Тухачевского, дом 22</p>
      </div>
      <div className='item2'>
        <ul>
            <li className='menu__link1'>Информация</li>
            <li className='menu__link2'>О компании</li>
            <li className='menu__link2'>Гарантии вкуса и свежести</li>
            <li className='menu__link2'>Доставка и оплата</li>
            <li className='menu__link2'>Контакты</li>
        </ul>
      </div>
      <div className='item3'>
        <ul>
            <li className='menu__link1'>Каталог</li>
            <li className='menu__link2'>Каталог десертов</li>
            <li className='menu__link2'>Готовые наборы</li>
            <li className='menu__link2'>Собрать свой набор</li>
            <li className='menu__link2'>Наборы с печатью</li>
            <li className='menu__link2'>Свадебные предложения</li>
            <li className='menu__link2'>Акции</li>
        </ul>
      </div>
      <div className='item3'>
        <ul>
            <li className='menu__link1'>ДЛЯ БИЗНЕСА</li>
            <li className='menu__link2'>Корпоративные подарки</li>
            <li className='menu__link2'>Для юридических лиц</li>
            <li className='menu__link2'>Оповикам</li>
        </ul>
      </div>
      <div className='item5'>
      <p className='menu__link1'>+7 (812) 309 82 88</p>
      <p>с 9:00 до 21:00</p>
      <div className='socials'>
        <img src={insta} alt="" />
        <img src={facebook} alt="" />
        <img src={wikipedia} alt="" />
      </div>
      </div>
      </div>
    </div>
  )
}

export default Footer
