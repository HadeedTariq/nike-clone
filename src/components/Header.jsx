import {SiNike} from 'react-icons/si'
import {FaSearch,FaShoppingBag} from 'react-icons/fa'
import '../css/Header.css'
import { useNavigate } from 'react-router-dom'
import { useStore } from '../context/store'
const Header = () => {
    const navigate=useNavigate()
    const [{count}]=useStore()
  return (
    <>
     <div className="nav">
        <nav className="nav-bar">
            <SiNike size={40} cursor={'pointer'} onClick={()=>navigate('/')}/>
            <ul>
                <li onClick={()=>navigate('/search')}><FaSearch size={28}/></li>
                <li onClick={()=>navigate('/cart')}>
                    <FaShoppingBag size={28}/>
                    <div className="shop">
                        <p>{count}</p>
                    </div>
                </li>
            </ul>
        </nav>
     </div>
    </>
  )
}

export default Header