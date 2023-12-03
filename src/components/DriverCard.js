const DriverCard = ({ name, rating, img, car: { model, licensePlate } }) => {




    const generateStars = (number) => {

        let stars;
        switch (Math.round(number)) {
            case 0:
                stars = '☆☆☆☆☆';
                break;
            case 1:
                stars = '★☆☆☆☆';
                break;
            case 2:
                stars = '★★☆☆☆';
                break;
            case 3:
                stars = '★★★☆☆';
                break;
            case 4:
                stars = '★★★★☆';
                break;
            case 5:
                stars = '★★★★★';
                break;
            default:
                stars = '☆☆☆☆☆';
        }
        return stars;
    }

    return (
        <div className="DriverCard">

            <img src={img} style={{ width: '100px', height: '100px', borderRadius: '50%' }} alt="profile pic" />
            <div>
                <h3>{name}</h3>
                <p>{generateStars(rating)}</p>
                <p>{model} - {licensePlate}</p>
            </div>

        </div>
    )
}

export default DriverCard;