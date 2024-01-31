import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/Header';
import DataComponent from './components/DataComponent';
import { useSelector } from 'react-redux';
import { selectDarkMode } from './redux/slices/theme.slice';

function App() {
  const theme = useSelector(selectDarkMode)
  return (
    <div style={theme ? {backgroundColor:'black',minHeight: '100vh'}: {minHeight: '100vh'}}>
      <Header />
      <DataComponent />
    </div>
  )
}

export default App
