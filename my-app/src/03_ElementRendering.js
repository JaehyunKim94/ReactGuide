function tick() {
    const element = (
        <div>
            <h1>03_ElementRendering</h1>
            <h2>It is {new Date().toLocaleTimeString()}</h2>
        </div>
    )
    setInterval(tick, 1000);
    return element;
}


export default tick;