import axios from 'axios'
import styles from './SurvivorList.module.css'

import SurvivorListHeader from './survivorListHeader/SurvivorListHeader'
import SurvivorListContent from './survivorListContent/survivorListContent'

const SurvivorList = ({ survivors, fetchDashboard }) => {
	const reportSurvivor = async id => {
		await axios.post(`http://localhost:8080/report/${id}`)
		fetchDashboard();
	}

	return (
		<div className={styles.listContainer}>
			<SurvivorListHeader/>
			<SurvivorListContent
				survivors={survivors}
				reportSurvivor={reportSurvivor}
			/>
		</div>
	)
}

export default SurvivorList