import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.scss'

export default function Home() {
	return (
		<main className={styles.main}>
			<Image src='/book.webp' alt='' width={150} height={150} />
			<Link className={styles.btn} href='/'>
				Start!
			</Link>
		</main>
	)
}
