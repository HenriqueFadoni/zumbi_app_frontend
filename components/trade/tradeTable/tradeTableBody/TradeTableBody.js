import { useSelector } from 'react-redux'
import styles from '../../Trade.module.css'

const TradeTableBody = () => {
	const { trade, firstTrader, secondTrader } = useSelector(state => state.trade)

	return (
		<table>
			<tbody>
				<tr>
					<td>
						Item
					</td>
					<td>
						{firstTrader ? firstTrader.first_name : 'Select Survivor'}
					</td>
					<td>
						{secondTrader ? secondTrader.first_name : 'Select Survivor'}
					</td>
				</tr>
				<tr>
					<td>Water</td>
					<td>{trade.firstTrader?.water}</td>
					<td>{trade.secondTrader?.water}</td>
				</tr>
				<tr>
					<td>Food</td>
					<td>{trade.firstTrader?.food}</td>
					<td>{trade.secondTrader?.food}</td>
				</tr>
				<tr>
					<td>Medication</td>
					<td>{trade.firstTrader?.medication}</td>
					<td>{trade.secondTrader?.medication}</td>
				</tr>
				<tr>
					<td>Ammunition</td>
					<td>{trade.firstTrader?.ammunition}</td>
					<td>{trade.secondTrader?.ammunition}</td>
				</tr>
				<tr>
					<td>Total Points</td>
					<td>{trade.firstTrader?.totalPoints}</td>
					<td>{trade.secondTrader?.totalPoints}</td>
				</tr>
			</tbody>
		</table>
	)
}

export default TradeTableBody