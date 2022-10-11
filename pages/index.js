import Page from '../components/Page';
import { useEffect, useState } from 'react'
import axios from 'axios';

import SurvivorList from '../components/SurvivorList/SurvivorList';
import Report from '../components/report/Report';

const Home = () => {
	const [survivors, setSurvivors] = useState([]);
	const [report, setReport] = useState({
		pointsLost: 0,
		notInfectedPercentage: 0,
		infectedPercentage: 0,
		averageItems: {
			water: 0,
			food: 0,
			medication: 0,
			ammunition: 0
		}
	});

	const generateReport = async () => {
		const { data } = await axios.get('http://localhost:8080/generateReport')
		setReport(data)
	}

	const getSurvivors = async () => {
		const { data } = await axios.get('http://localhost:8080/survivors')
		setSurvivors(data)
	}

	const fetchDashboard = () => {
		generateReport();
		getSurvivors();
	}

	useEffect(() => {
		fetchDashboard()
	}, [])

	return (
		<Page>
			<Report report={report} />
			<SurvivorList survivors={survivors} fetchDashboard={fetchDashboard} />
		</Page>
	)
}

export default Home