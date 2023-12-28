import './portfolio.css'
import Card from "./card"
import img0 from "../images/img0.jpg"
import img1 from "../images/img1.jpg"
import img2 from "../images/img2.jpg"
import img3 from "../images/img3.jpg"
import img4 from "../images/img4.jpg"


const Portfolio = () => {
    return <div className="mainbody"><h1>Portfolio</h1><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium quae consequuntur enim ducimus vero pariatur nihil sit rem, aut, maxime reiciendis sunt eum ipsum quod accusamus! Consequuntur maiores nulla ut!</p><div className="cards"><Card image={img0} alt={'Code'} title='Eat Sleep Code Repeat' /><Card image={img1} alt={'Parot'} title='Parot' /><Card image={img2} alt={'Bird'} title='Bird' /><Card image={img3} alt={'Ballon'} title='Hot Air Balloon' /><Card image={img4} alt={'book'} title='Locked book' /><Card image={img0} alt={'Code'} title='Back to: Eat Sleep Code Repeat' />
    </div></div>
}

export default Portfolio