import hero from '../assets/hero.png'
const Main = () => {
  return (
    <>
      <div className="main">
        <div className="heading">
          <h1>Nike is the name of trust <br /><span>Now in your town</span></h1>
        </div>
        <div className="logo">
          <img src={hero} alt="logo" className='hover'/>
        </div>
      </div>
    </>
  )
}

export default Main