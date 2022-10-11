import TradeTable from './tradeTable/TradeTable'
import TradeView from './tradeView/TradeView'
import TradeHeader from './tradeHeader/TradeHeader'

const TradePage = () => (
	<>
		<TradeHeader />
		<TradeView
			id='1'
			traderString='firstTrader'
		/>
		<TradeView
			id='2'
			traderString='secondTrader'
		/>
	</>
)

export default TradePage