const BoxColor = ({ r, g, b }) => {




    const getHexColor = (r, g, b) => {
        return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
    }
    // 
    const divStyle = {
        width: '500px',
        height: '100px',
        margin: 'auto',
        border: '2px solid #000',
        textAlign: 'center',
        backgroundColor: `rgb(${r},${g},${b})`,
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }

    return (
        <div className="BoxColor" style={divStyle}>
            <p> rgb({r}, {g}, {b})</p>
            <p>{getHexColor(r, g, b)}</p>
        </div>
    )
}

export default BoxColor;