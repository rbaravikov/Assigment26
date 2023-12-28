import Card from "./card"
import img0 from "./images/img0.jpg"

const Portfolio = () => {
    return <div className="mainbody"><h1>Portfolio</h1><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium quae consequuntur enim ducimus vero pariatur nihil sit rem, aut, maxime reiciendis sunt eum ipsum quod accusamus! Consequuntur maiores nulla ut!</p><div className="cards"><Card image={img0} alt={'Code'} title='Eat Sleep Code Repeat' /><Card image={img0} alt={'Code'} title='Eat Sleep Code Repeat' /><Card image={img0} alt={'Code'} title='Eat Sleep Code Repeat' /><Card image={img0} alt={'Code'} title='Eat Sleep Code Repeat' /><Card image={img0} alt={'Code'} title='Eat Sleep Code Repeat' /><Card image={img0} alt={'Code'} title='Eat Sleep Code Repeat' />
    </div></div>
}

export default Portfolio