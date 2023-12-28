import './App.css'
import Header from './header/header'
import './images/lines.jpg'
import Portfolio from './portfolio/portfolio'

function App() {
  return (
    <>
        <Header title={'Title'} lineOne={'Some about text'} lineTwo={'in two lines'} buttonName={'Button'}/>
        <Portfolio/>
    </>
  )
}

export default App
