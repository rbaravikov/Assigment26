import './header.css'
const Header = ({title, lineOne, lineTwo, buttonName}) => {
    return <div className="header"><h1>{title}</h1><p>{lineOne}<br/>{lineTwo}</p><button>{buttonName}</button></div>
}

export default Header