import { BsCart2 } from 'react-icons/bs'
import {toprateslaes} from '../data/data'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useStore } from '../context/store'
import { stateHolder } from '../context/reducer'
const TopRated = ({home}) => {
  const navigate=useNavigate()
  const [{count},dispatch]=useStore()
  const {items,title}=toprateslaes
  const [cart,setCart]=useState([])
  const changeCart=(e)=>{
    const inp=e.target.value;
    if(inp){
    const filterCart=cart.filter((item)=>item.title.toLowerCase().includes(inp.toLowerCase()))
    setCart(filterCart)
    }
    else{
      setCart(items)
    }
  }
  const addCart=(item)=>{
    dispatch({type:stateHolder.SETCART,cart:item})
    dispatch({type:stateHolder.SETCOUNT,count:count+1})
  }
  useEffect(()=>{
    const cartItems=home?items.slice(0,6):items
    setCart(cartItems)
  },[])
  return (
    <>
     <div className="top-rated">
      <h1>{title}</h1>
      {!home &&
        <div className="search">
          <input type="search" placeholder='Search items here' onChange={changeCart}/>
        </div>
      }
        <div className="cart-box">
          {
            cart.map((item, index) =>
              <div className="box" key={index}
               style={{backgroundColor:item.color,flexDirection:"column"}}>
                <div className="left">
                  <h3>{item.title}</h3>
                  <h3>{item.text}</h3>
                  <div className="rating">
                    <p>{item.price} $</p>
                    <p>{item.rating} ★</p>
                  </div>
                  <button onClick={()=>addCart(item)}><BsCart2 size={25} /></button>
                </div>
                <div className="right">
                  <img src={item.img} alt="img" className='hover' />
                </div>
              </div>
            )
          }
        </div>
        {
          home &&
          <button onClick={()=>navigate('/search')} className='btn'>See more</button>
        }
     </div>
    </>
  )
}

export default TopRated