import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import Banner from '../components/banner';

export default function Home() {
	const clickHandler = () => {
		console.log('hi there from banner button');
	};

	return (
		<div className={styles.container}>
			<Head>
				<title>Coffe Finder App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={styles.main}>
				<Banner btnText='Find nearby stores' clickHandler={clickHandler} />
				<div className={styles.heroImage}>
					<Image src='/hero-image.png' width={500} height={400} />
				</div>
			</main>
		</div>
	);
}
