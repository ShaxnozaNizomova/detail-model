import React, { useEffect, useState } from 'react'
import "./Products.css"
import axios from 'axios'
import cart from '../../assets/images/cart.svg'
import { useLocation, useParams, useNavigate, useSearchParams } from 'react-router-dom'
import Model from '../model/Model'
import Detail from '../detail/Detail'
const api__url = "https://dummyjson.com"
function Products() {
  const [data, setData] = useState(null)
  const [searchParams, setSearchParams] = useSearchParams()
  const [detail, setDetail] = useState(true)
  useEffect(()=>{
    let id = searchParams.get("detail")
    if(id){
      axios
      .get(`${api__url}/products/${id}`)
      .then(res=> setDetail(res.data))
    }
  },[searchParams])
  useEffect(()=>{
    axios
        .get(`${api__url}/products?limit=6`)
        .then(res => setData(res.data.products))
        .catch(err => console.log("error"))
  },[])
  const closeDetailModel = ()=> {
    setDetail(null)
    setSearchParams({})
  }
   return (
    <div className='products'>
      <p className='loc'>Главная  Каталог  <span>Готовые наборы</span></p>
      <h2 className='title'>Готовые наборы</h2>
      <div className='categories'>
        <p className='category'>Свадьба</p>
        <p className='category'>Девичник</p>
        <p className='category'>День рождения </p>
        <p className='category'>8 марта</p>
        <p className='category'>23 февраля</p>
        <p className='category'>Новый год</p>
        <p className='category'>День учителя</p>
        <p className='category'>День тренера</p>
        <p className='category'>1 сентября</p>
        <p className='category'>Пасха</p>
        <p className='category'>Без печати</p>
        
      </div>
      <div className='products__items'>
      {
        data?.map(products => (
            <div className='card'
            onClick={() => setSearchParams({detail: products.id})}
              key={products.id}>
              <img src={products.images[0]} alt={products.title} width={370} height={300}/>
              <h4 className='products__title'>{products.title}</h4>
              <p className='products__text'>24 штуки в коробке в виде сердца. Ассорти из 6 вкусов </p>
              <div className='border'>
                <div className='border1'><p className='products__price'>{products.price}</p></div>
                <div className='border2'><img src={cart} alt="cart" /> <p>В корзину</p></div>
              </div>
            </div>
        ))
      }
      </div>
     {
      detail?  <Model data={detail} close={closeDetailModel}>
      <div className='detail__model'>
      <div>
        <img src={detail?.thumbnail} alt="" />
      </div>
      <div>
        <h2 className='products__title'>{detail.title}</h2>
        <p className='products__text'>{detail.description}</p>
        <p className='products__price'> $ {detail.price}</p>
      </div>
      </div>
    </Model> : <></>
     }
    </div>
  )
}

export default Products
