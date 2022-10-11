import styles from '../Report.module.css';

const ReportTable = ({
	averageItems
}) => (
	<div className={styles.averageContainer}>
		<div>
			<h4>Average Items Per Survivor</h4>
		</div>
		<div className={styles.averageGrid}>
			<table>
				<tbody>
					<tr>
						<td>Water</td>
						<td>{averageItems.water}</td>
					</tr>
					<tr>
						<td>Food</td>
						<td>{averageItems.food}</td>
					</tr>
					<tr>
						<td>Medication</td>
						<td>{averageItems.medication}</td>
					</tr>
					<tr>
						<td>Ammunition</td>
						<td>{averageItems.ammunition}</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
)

export default ReportTable