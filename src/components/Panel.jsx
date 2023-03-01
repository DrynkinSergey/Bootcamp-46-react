const Item = ({ id, name, age }) => {
	return (
		<section>
			<h1>Name: {name}</h1>
			<h1>Title: {id}</h1>
			<h1>Age: {age}</h1>
		</section>
	)
}

export const Panel = ({ items }) => {
	return (
		<section>
			{items.length !== 0 ? (
				items.map((el, index) => (
					<Item
						key={el.id}
						id={el.id}
						index={index}
						age={el.age}
						name={el.name}
					/>
				))
			) : (
				<h1>Немає даних</h1>
			)}

			<br />
		</section>
	)
}
