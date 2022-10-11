import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { resetTrade } from '../../../store/trade/action'
import styles from '../Trade.module.css'

import TradeTableBody from './tradeTableBody/TradeTableBody'

const TradeTable = () => {
	const { trade, firstTrader, secondTrader } = useSelector(state => state.trade)
	const dispatch = useDispatch()

	const isSameTrader = firstTrader?.id === secondTrader?.id
	const isNotTradeEmpty = trade?.secondTrader?.totalPoints > 0 && trade?.firstTrader?.totalPoints > 0
	const fairTrade = trade?.secondTrader?.totalPoints === trade?.firstTrader?.totalPoints;

	const resetState = () => {
		dispatch(resetTrade())
	}

	const onTradeSubmit = async () => {
		const data = {
			firstTrader: {
				id: firstTrader.id,
				water: trade.firstTrader.water,
				food: trade.firstTrader.food,
				medication: trade.firstTrader.medication,
				ammunition: trade.firstTrader.ammunition,
			},
			secondTrader: {
				id: secondTrader.id,
				water: trade.secondTrader.water,
				food: trade.secondTrader.food,
				medication: trade.secondTrader.medication,
				ammunition: trade.secondTrader.ammunition,
			}
		}

		await axios.post('http://localhost:8080/trade', data)
		resetState()
	}

	return (
		<div className={styles.tradeTables}>
			{
				isSameTrader 
					? <h3>Select 2 Valid Traders</h3>
					: <TradeTableBody />
			}
			
			<button
				onClick={onTradeSubmit}
				disabled={!firstTrader || !secondTrader || !fairTrade || !isNotTradeEmpty}
			>
				Make Trade
			</button>
		</div>
	)
}

export default TradeTable