import Link from 'next/link'
import styles from '../Trade.module.css'

const TradeHeader = () => (
	<div className={styles.tableHeader}>
		<h2>
			Trade
		</h2>
		<div>
			<Link href={'/'}>
				<a>Return</a>
			</Link>
		</div>
	</div>
)

export default TradeHeader;