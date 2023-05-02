import { Highlight, Main, PopularSales, TopRated } from '../components'
import '../css/Home.css'
const Home = () => {
  return (
    <>
     <div className="home">
        <Main/>
        <PopularSales/>
        <Highlight/>
        <TopRated home/>
     </div>
    </>
  )
}

export default Home