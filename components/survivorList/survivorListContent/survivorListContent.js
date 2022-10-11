import styles from '../SurvivorList.module.css'

import SurvivorListItem from './survivorListItem/SurvivorListItem';

const SurvivorListContent = ({
	survivors,
	reportSurvivor
}) => {
	const renderList = survivors.map(survivor => (
		<SurvivorListItem
			key={survivor.id}
			survivor={survivor}
			reportSurvivor={reportSurvivor}
		/>
	))

	return (
		<div className={styles.list}>
			<table>
				<tbody>
					<tr>
						<td>Name</td>
						<td>Alive</td>
						<td>Inventory</td>
						<td>Actions</td>
					</tr>
					{renderList}
				</tbody>
			</table>
		</div>
	)
}

export default SurvivorListContent