import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'

import styles from '../Trade.module.css'
import { setTrader } from '../../../store/trade/action'
import TradeInventory from './tradeInventory/TradeInventory';

const TradeView = ({
	id,
	traderString
}) => {
	const [aliveList, setAliveList] = useState([])
	const trade = useSelector(state => state.trade)
	const dispatch = useDispatch()

	const getSurvivorsAlive = async () => {
		const { data } = await axios.get('http://localhost:8080/survivors/alive')
		setAliveList(data)
	}

	useEffect(() => {
		getSurvivorsAlive()
	}, [])

	const getSurvivor = async (id) => {
		const { data } = await axios.get(`http://localhost:8080/survivors/${id}`)
		return data
	}

	const onChangeHandler = async event => {
		const optionId = event.target.id.split('-')[1];
		const optionValue = event.target.value;

		const survivorData = await getSurvivor(optionValue)
		dispatch(setTrader(optionId, survivorData))
	}

	const renderOptions = aliveList?.map(survivor => (
		<option key={survivor.id} value={survivor.id}>
			{survivor.first_name}
		</option>
	))

	return (
		<div className={styles.tradeCointainer}>
			<select
				name="survivor"
				id={`survivor-${id}`}
				onChange={onChangeHandler}
				value={trade[traderString] ? trade[traderString].id : ''}
			>
				<option value="" disabled selected>
					Select A Survivor
				</option>
				{renderOptions}
			</select>

			<TradeInventory traderString={traderString} />
		</div>
	)
}

export default TradeView