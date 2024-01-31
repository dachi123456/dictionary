import { useSelector } from 'react-redux';
import {  MeaningsProps } from '../interfaces/interface';
import './styles/meanings.css';
import { selectDarkMode } from '../redux/slices/theme.slice';


const Meanings = ({ meanings }: MeaningsProps) => {
    const theme = useSelector(selectDarkMode)
    return (
        <div className='p-5'>
            {meanings.map((meaning, index) => (
                <div key={index} className="meaning-section">
                    <div>
                        <span className='d-flex direction-row align-items-center'>
                            <span className="part-of-speech">
                                <h3 className={`fw-bold mt-4 ${theme ? 'text-light' : ''}`} >{meaning.partOfSpeech}</h3>
                            </span>
                            <span className={`line ms-3 mt-3 ${theme ? 'bg-light' :''}`}></span>
                        </span>
                    </div>
                    {meaning.definitions.map((definition, idx) => (
                        <div key={idx} className="definition">
                            
                            <li className={`mt-1 ${theme ? 'text-light' : ''}`} style={{listStyle:'none'}}>
                                <span style={{ color: theme ? 'hsl(274deg, 82%, 60%)' : 'black' ,marginRight:'1rem'}}>&#8226;</span> {definition.definition}
                            </li>
                            {definition.synonyms.length > 0 && (
                                <div>
                                    <h4>Synonyms</h4>
                                    <ul>
                                        {definition.synonyms.map((synonym, i) => (
                                           <ul>
                                             <li key={i}>{synonym}</li>
                                           </ul>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            {definition.antonyms.length > 0 && (
                                <div>
                                    <h4>Antonyms</h4>
                                    <ul>
                                        {definition.antonyms.map((antonym, i) => (
                                            <li key={i}>{antonym}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Meanings;
