import { Form } from "react-bootstrap"
import './styles/header.css'
import blackBookIcon from '../assets/black-book.svg'
import lightBookIcon from '../assets/light-book.svg'
import blackMoonIcon from '../assets/moon-black.svg'
import whiteMoonIcon from '../assets/moon-svgrepo-com (1).svg'
import { useDispatch, useSelector } from "react-redux"
import { changeTheme, selectDarkMode } from "../redux/slices/theme.slice"
const Header = () => {
    const theme = useSelector(selectDarkMode)
    const dispatch  = useDispatch()

    const changeBgColor = () => {
        dispatch(changeTheme())
    }
    const restartPage = () => {
        window.location.reload()
    }
  return (
    <div className="d-flex direction-row align-items-center justify-content-around" style={theme ? {backgroundColor: 'black'} : {}}>
        <img src={theme ? lightBookIcon : blackBookIcon} alt="" className="book-icon" onClick={restartPage}/>
            
            <Form className=" d-flex direction-row align-items-center">
             <label className="switch">
                <input
                    type="checkbox"
                />
                <span className="slider" onClick={changeBgColor}></span>
                </label>
                <img src={theme ? whiteMoonIcon : blackMoonIcon} alt="" className="moon-icon"/>
            </Form>
            
        
    </div>
  )
}

export default Header