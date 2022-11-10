import { useSelector } from "react-redux";
import { selectHistory } from "../../redux/historySlice";

import HistoryItem from "./HistoryItem";

const HistoryTranslate = () => {

	const history = useSelector(selectHistory);

	return (
		<>
			<h2>Your history translate</h2>
			<table className="table">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">Languages</th>
						<th scope="col">From</th>
						<th scope="col">To</th>
					</tr>
				</thead>
				<tbody>
					{history.map((item, index) => {
						return (
							<HistoryItem
								key={index}
								index={index + 1}
								langPair={item.langPair}
								inputText={item.inputText}
								resultText={item.resultText}
							/>
							)
					})}
				</tbody>
			</table>
		</>
	)
}

export default HistoryTranslate;