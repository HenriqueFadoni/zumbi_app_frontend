import Page from '../../components/Page'
import TradePage from '../../components/trade/Trade'
import axios from 'axios'
import { getMarket } from '../../store/trade/action'
import { wrapper } from '../../store/store'

const Trade = () => (
	<Page>
		<TradePage />
	</Page>
)

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
	const { data } = await axios.get('http://localhost:8080/market')
	store.dispatch(getMarket(data))
})

export default Trade