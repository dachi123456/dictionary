import { useSelector } from 'react-redux'
import playIcon from '../assets/play-svgrepo-com.svg'
import './styles/mainComp.css'
import { selectDarkMode } from '../redux/slices/theme.slice'
const MainComponent = ({name,onPlayButton}) => {
    const theme = useSelector(selectDarkMode)

  return (

    <div className="main-div d-flex direction-row justify-content-between align-items-center">
        <h1 className={`fw-bold fs-1 ${theme ? 'text-light':''}`}>{name}</h1>
        <img src={playIcon} alt="" className='play-icon' onClick={onPlayButton}/>
    </div>
    
  )
}

export default MainComponent