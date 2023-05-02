import {highlight} from '../data/data'
const Highlight = () => {
  const {heading,title,text,img}=highlight
  return (
    <>
      <div className="highlight">
        <div className="h-left">
          <img src={img} alt="" />
        </div>
        <div className="h-right">
          <h1>{heading}</h1>
          <h2>{title}</h2>
          <h3>{text}</h3>
        </div>
      </div>     
    </>
  )
}

export default Highlight