import { stateHolder } from '../context/reducer'
import { useStore } from '../context/store'
import {popularsales} from '../data/data'
import {BsCart2} from 'react-icons/bs'
const PopularSales = () => {
  const {title,items}=popularsales
  const [{count},dispatch]=useStore()
  const addCart=(item)=>{
    dispatch({type:stateHolder.SETCOUNT,count:count+1})
    dispatch({type:stateHolder.SETCART,cart:item})
  }
  return (
    <>
     <div className="popular">
      <h1>{title}</h1>
        <div className="cart-box">
          {
            items?.map((item, index) =>
              <div className="box" key={index} style={{backgroundColor:item.color}}>
                <div className="left">
                  <h3>{item.title}</h3>
                  <h3>{item.text}</h3>
                  <div className="rating">
                    <p>{item.price} $</p>
                    <p>{item.rating} ★</p>
                  </div>
                  <button onClick={()=>addCart(item)}><BsCart2 size={25}/></button>
                </div>
                <div className="right">
                  <img src={item.img} alt="img" className='hover'/>
                </div>
              </div>
            )
          }
        </div>
     </div>
    </>
  )
}

export default PopularSales