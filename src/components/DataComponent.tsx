import { useEffect, useRef, useState } from "react";
import Input from "./Input";
import MainComponent from "./MainComponent";
import Meanings from "./Meanings";
import {  WordDetails } from "../interfaces/interface";

const DataComponent = () => {
    const [word, setWord] = useState('hello'); 
    const [wordData, setWordData] = useState<WordDetails | null>(null);
    const inputRef = useRef<HTMLInputElement>(null); 
    const [error, setError] = useState<string>('');

    useEffect(() => {
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
            .then(res => {
                if (!res.ok) {
                    throw new Error('No such word found');
                }
                return res.json();
            })
            .then(data => {
                setWordData(data[0]);
                console.log(data[0])
            })
            .catch(err => setError(err.message));
    }, [word]);

    const onBtnClick = () => {
        if (inputRef.current && inputRef.current.value) {
            setWord(inputRef.current.value);
        }
        inputRef.current!.value = '';
    };

    const onPlayButton = () => {
        if (wordData && wordData.phonetics.length > 0) {
            const textsp = new SpeechSynthesisUtterance(wordData.word);
            window.speechSynthesis.speak(textsp);
        } 
    };

    if (error) {
        return <div className="bg-danger w-50 m-auto mt-5 p-4 d-flex rounded-4 justify-content-center align-items-center">
            <h4>{error}</h4>
        </div>;
    }

    return (
        <div className="data-container">
            <Input inputRef={inputRef} onBtnClick={onBtnClick}/>
            <MainComponent name={wordData?.word || ''} onPlayButton={onPlayButton}/>
            {wordData && <Meanings meanings={wordData.meanings} />}
        </div>
    );
};

export default DataComponent;
