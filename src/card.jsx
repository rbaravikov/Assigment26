const Card = ({image, alt, title}) => {
    return <div className="card"><img src={image} alt={alt} /><h4>{title}</h4></div>
}

export default Card