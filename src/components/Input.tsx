import { useSelector } from 'react-redux'
import searchIcon from '../assets/search-svgrepo-com.svg'
import './styles/input.css'
import { selectDarkMode } from '../redux/slices/theme.slice'

const Input = ({inputRef,onBtnClick}) => {
    const theme = useSelector(selectDarkMode)
  return (
    <div className='search-div d-flex flex-row align-items-center w-75 m-auto mt-5' style={theme ? {backgroundColor:'hsl(0deg, 0%, 12%)'} : {}}>
       <input
        type="text"
        name="" 
        ref={inputRef} 
        className={`border-0 search-input ${theme ? 'text-light' : ''}`}
        placeholder='Search for any word ...'

        />
       <img src={searchIcon} alt="" onClick={onBtnClick} className='search-icon' style={theme ? {mixBlendMode:'color'} : {}}/>
    </div>
  )
}

export default Input