import ReportHeader from './reportHeader/ReportHeader';
import ReportTable from './reportTable/ReportTable';

const Report = ({
	report
}) => (
	<div>
		<ReportHeader
			infectedPercentage={report.infectedPercentage}
			notInfectedPercentage={report.notInfectedPercentage}
			pointsLost={report.pointsLost}
		/>
		<ReportTable
			averageItems={report.averageItems}
		/>
	</div>
)

export default Report