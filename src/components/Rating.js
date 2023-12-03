const Rating = ({ children }) => {

    let stars;
    switch (Math.round(children)) {

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

    return (
        <div className="Rating">
            <p>{stars}</p>
        </div>
    );
}


export default Rating;