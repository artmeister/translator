const HistoryItem = ({ index, langPair, inputText, resultText }) => {
	return (
    <tr>
      <td>{index}</td>
      <td>{langPair}</td>
      <td>{inputText}</td>
      <td>{resultText}</td>
    </tr>
	)
}

export default HistoryItem;