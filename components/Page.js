import Head from 'next/head'

import styles from '../styles/Home.module.css'

const Page = ({ children }) => (
	<div>
		<Head>
			<title>Zumbi App - By Henry Fadoni</title>
			<meta name="description" content="A demo application created by Henry Fadoni" />
			<link rel="icon" href="/favicon.ico" />
		</Head>

		<main className={styles.main}>
			{children}
		</main>

		<footer className={styles.footer}>
			<a
				href="https://github.com/HenriqueFadoni"
				target="_blank"
				rel="noopener noreferrer"
			>
				Powered by Henry Fadoni
			</a>
		</footer>
	</div>
)

export default Page