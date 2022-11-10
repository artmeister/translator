const HistoryItem = ({ index, langPair, inputText, resultText }) => {
	return (
    <tr>
      <td scope="row">{index}</td>
      <td>{langPair}</td>
      <td>{inputText}</td>
      <td>{resultText}</td>
    </tr>
	)
}

// const HistoryItem = (index, langPair, inputText, resultText) => {
// 	return (
    // <tr>
    //   <td scope="row">{index}</td>
    //   <td>{langPair}</td>
    //   <td>{inputText}</td>
    //   <td>{resultText}</td>
    // </tr>
// 	)
// }

export default HistoryItem;