import styles from '../Report.module.css';

const ReportHeader = ({
	infectedPercentage,
	notInfectedPercentage,
	pointsLost
}) => (
	<div className={styles.reportGrid}>
		<div className={styles.report}>
			<h2>{infectedPercentage}%</h2>
			<h3>Infected</h3>
		</div>
		<div className={styles.report}>
			<h2>{notInfectedPercentage}%</h2>
			<h3>Alive</h3>
		</div>
		<div className={styles.report}>
			<h2>{pointsLost}</h2>
			<h3>Points Lost</h3>
		</div>
	</div>
)

export default ReportHeader