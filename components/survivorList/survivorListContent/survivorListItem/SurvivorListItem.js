const SurvivorListItem = ({
	survivor,
	reportSurvivor
}) => {
	const style = {
		color: survivor.infected ? '#636363' : '#FFFFFF'
	}

	const inventoryTable = (
		<table>
			<tbody style={style}>
				<tr>
					<td>Water: {survivor.water}</td>
				</tr>
				<tr>
					<td>Food: {survivor.food}</td>
				</tr>
				<tr>
					<td>Medication: {survivor.medication}</td>
				</tr>
				<tr>
					<td>Ammunition: {survivor.ammunition}</td>
				</tr>
			</tbody>
		</table>
	)

	return (
		<tr>
			<td>{survivor.first_name.toUpperCase()}</td>
			<td>{!survivor.infected ? 'YES' : 'NO'}</td>
			<td>{inventoryTable}</td>
			<td>
				<button
					disabled={survivor.infected}
					onClick={() => reportSurvivor(survivor.id)}
				>
					Report
				</button>
			</td>
		</tr>
	)
}

export default SurvivorListItem