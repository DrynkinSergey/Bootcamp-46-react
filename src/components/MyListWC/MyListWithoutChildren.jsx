import React from 'react'
import styles from './MyListWC.module.css'

export const MyListWithoutChildren = ({ title, data }) => {
	return (
		<section>
			<h1 className={styles.title}>{title}</h1>
			<ul className={styles.list}>
				{data.map(item => (
					<li key={item.id}>{item.name}</li>
				))}
			</ul>
		</section>
	)
}
