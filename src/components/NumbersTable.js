const NumbersTable = ({ limit }) => {



    let table = [];
    for (let i = 1; i < limit + 1; i++) {
        table.push(i)
    }

    return (
        <div className="NumbersTable">
            {table.map((number, index) => {
                if (number % 2 === 0) {
                    return <div key={index} className="redCell">{number}</div>
                } else {
                    return <div key={index} className="whiteCell">{number}</div>
                }
            })}
        </div>
    );

}



export default NumbersTable;