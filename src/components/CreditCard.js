import visa from '../assets/images/visa.png';
import masterCard from '../assets/images/masterCard.png';


const CreditCard = (props) => {
    // console.log(props)
    const { bank, bgColor, color, expirationMonth, expirationYear, number, owner, type } = props;


    // change logo dynamically:
    const getLogo = (name) => {

        if (name.includes('Visa')) {
            return <img src={visa} alt="logo" style={{ width: '40px' }} />
        } else if (name.includes('Master Card')) {
            return <img src={masterCard} alt="logo" style={{ width: '40px' }} />
        }

    }
    // hide credit card number:

    const hideCardNumber = (numbers) => {
        let output = ''
        for (let i = 0; i < numbers.length - 4; i++) {
            output += '*'

        }
        return output + numbers.slice(-4)
    }

    let month;
    if (expirationMonth < 10) {
        month = '0' + expirationMonth.toString();
    } else month = expirationMonth.toString();

    let year = expirationYear.toString().slice(-2)


    // inline styles:
    const divStyle = {

        backgroundColor: bgColor,
        width: '250px',
        height: '150px',
        borderRadius: '10px',
        color: color,
        padding: '16px',
        textAlign: 'left',



    }

    return (

        <div style={divStyle}>
            <div id="creditCard-logo">{getLogo(type)}</div>
            <p id="creditCard-number">{hideCardNumber(number)}</p>
            <div>
                <p id="expiration-para">Expires {month}/{year} {bank}</p>
                <p id="owner-para">{owner}</p>
            </div>

        </div>

    );
}






export default CreditCard;