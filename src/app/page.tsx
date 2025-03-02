import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.scss'

export default function Home() {
	return (
		<main className={styles.main}>
			<Link className={styles.btn} href='/second'>
				<div className={styles.start}>
					<Image
						className={styles.img}
						src='/book.webp'
						alt=''
						width={100}
						height={100}
					/>
					Start!
				</div>
			</Link>
		</main>
	)
}
