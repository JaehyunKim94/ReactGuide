function Welcome(props) {
	return <h1> hello, {props.name} </h1>;
}

function ComponentComb() {
	return (
		<div>
            <h1>04_ComponentComb</h1>
			<Welcome name="Park" />
			<Welcome name="Kim" />
			<Welcome name="Lee" />
		</div>
	)
}

export default ComponentComb;