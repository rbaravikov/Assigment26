import './header.css'
const Header = ({title, lineOne, lineTwo, buttonName}) => {
    return <div  className="header"><div className="blur"><h1>{title}</h1><p>{lineOne}<br/>{lineTwo}</p><button>{buttonName}</button></div></div>
}

export default Header