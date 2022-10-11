import Link from 'next/link'
import styles from '../SurvivorList.module.css'

const SurvivorListHeader = () => (
	<div className={styles.listHeader}>
		<h4>
			List of Users
		</h4>
		<Link href={'/trade'}>
			<a>Make A Trade</a>
		</Link>
	</div>
)

export default SurvivorListHeader