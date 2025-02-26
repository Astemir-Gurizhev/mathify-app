import Image from 'next/image'
import Link from 'next/link'
import styles from './Header.module.scss'

export default function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.row}>
				<Link href={'/'}>
					<div className={styles.logo}>
						<Image src='/logo.webp' alt='' width={30} height={30} />
						Mathify
					</div>
				</Link>
			
			</div>
		</header>
	)
}
