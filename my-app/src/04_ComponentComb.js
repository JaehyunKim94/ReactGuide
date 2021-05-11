function Welcome(props) {
	return <h2> hello, {props.name} </h2>;
}

function ComponentComb() {
	return (
		<div>
			<h1>04 _ComponentComb</h1>
			<Welcome name="Park" />
			<Welcome name="Kim" />
			<Welcome name="Lee" />
		</div>
	)
}

export default ComponentComb;