import { MdRemoveShoppingCart } from 'react-icons/md'
import { useStore } from '../context/store'
import { stateHolder } from '../context/reducer'
const Cart = () => {
  const [{cart},dispatch]=useStore()
  const removeCart=(item)=>{
    dispatch({type:stateHolder.REMOVECART,item:item})
    setTimeout(() => {
      dispatch({type:stateHolder.SETCOUNT,count:cart.length-1})
    }, 100); 
  }
  return (
    <>
      <div className="cart-box">
        {
          cart.map((item,index)=>
           <div className="box" key={index} style={{backgroundColor:item.color}}>
            <div className="left">
                  <h3>{item.title}</h3>
                  <h3>{item.text}</h3>
                  <div className="rating">
                    <p>{item.price} $</p>
                    <p>{item.rating} ★</p>
                  </div>
                  <button onClick={()=>removeCart(item)}><MdRemoveShoppingCart size={25}/></button>
                </div>
                <div className="right">
                  <img src={item.img} alt="img" className='hover'/>
                </div>
           </div>
          )
        }
      </div>
    </>
  )
}

export default Cart