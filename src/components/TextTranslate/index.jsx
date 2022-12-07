import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import { add } from '../../redux/historySlice';


const TextTranslate = () => {
	const [inputText, setInputText] = useState('');
	const [selectedLanguageKeyFrom, setLanguageKeyFrom] = useState('ru');
	const [selectedLanguageKeyTo, setLanguageKeyTo] = useState('en');
	const [resultText, setResultText] = useState('');

	const dispatch = useDispatch();

	const langPair = `${selectedLanguageKeyFrom}|${selectedLanguageKeyTo}`;
	const url = `https://api.mymemory.translated.net/get?q=${inputText}&langpair=${langPair}`;
	// const regex = /(empty|^$)/;

	const languageKeyFrom = (selectedLanguage) => {
		setLanguageKeyFrom(selectedLanguage.target.value);
	}
	const languageKeyTo = (selectedLanguage) => {
		setLanguageKeyTo(selectedLanguage.target.value);
	}

	const translateText = async () => {
		if (inputText.length >= 2) {
			// if (
			// 	!selectedLanguageKeyFrom.match(regex) &&
			// 	!selectedLanguageKeyTo.match(regex)
			// ) {
				await axios.post(url)
					.then(async (response) => {
						if (response.data.responseData.match) setResultText(response.data.responseData.translatedText)
							else alert(response.data.responseData.translatedText)
					})
					.catch(error => {
						alert(error)
					})
			// } else alert('Выберите языки');
		} else alert('Введите больше текста');
 	}

	useEffect(() => {
		if (resultText !== '') dispatch(add({ inputText, resultText, langPair }))
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [resultText])

	return (
		<>
			<h1>React Translate App</h1>
			<div className="mb-3">
				<select defaultValue="ru" className="form-select" aria-label="Default select example" onChange={languageKeyFrom}>
					{/* <option value="empty">Select Language</option> */}
					<option value="ru">Russian</option>
					<option value="en">English</option>
					<option value="de">Deutch</option>
				</select>
			</div>
			<div className="mb-3">
				<div className="mb-3">
					<label htmlFor="exampleFormControlTextarea1" className="form-label">Enter text to translate </label>
					<textarea onChange={(e) => setInputText(e.target.value)} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
				</div>
			</div>

			<button type="button" className="btn btn-primary mb-4" onClick={translateText}>Translate</button>

			<div className="mb-3">
				<select defaultValue="en" className="form-select" aria-label="Default select example" onChange={languageKeyTo}>
					{/* <option value="empty">Select Language</option> */}
					<option value="ru">Russian</option>
					<option value="en">English</option>
					<option value="de">Deutch</option>
				</select>
			</div>
			<div className="mb-3">
				<div className="mb-3">
					<label htmlFor="exampleFormControlTextarea1" className="form-label">Total result Text</label>
					<textarea value={resultText} className="form-control" id="exampleFormControlTextarea1" rows="3" readOnly></textarea>
				</div>
			</div>
		</>
	)
}

export default TextTranslate;