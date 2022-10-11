import { useSelector, useDispatch } from 'react-redux'
import { updateTrade } from '../../../../store/trade/action'
import styles from '../../Trade.module.css'

const TradeInventory = ({ traderString }) => {
	const items = ['water', 'food', 'medication', 'ammunition']
	const trade = useSelector(state => state.trade)
	const dispatch = useDispatch()

	const onTradeItem = (type, item, trader) => {
		dispatch(updateTrade(type, item, trader))
	}

	const renderItemList = items.map((item, index) => trade[traderString] && (
		<tr key={`${item}-${index}`}>
			<td>{item.toUpperCase()}</td>
			<td>{trade[traderString][item]}</td>
			<td>
				<button
					disabled={trade?.trade[traderString][item] === 0}
					onClick={() => onTradeItem('add', item, traderString)}
				>+</button>
				<button
					disabled={trade[traderString][item] === 0}
					onClick={() => onTradeItem('minus', item, traderString)}
				>-</button>
			</td>
		</tr>
	))

	return trade[traderString] && (
		<div className={styles.averageContainer}>
			<div className={styles.averageGrid}>
				<table>
					<tbody>
						{renderItemList}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default TradeInventory
