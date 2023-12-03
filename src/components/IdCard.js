const IdCard = ({ firstName, lastName, gender, height, birth, picture }) => {

    return (
        <div className="IdCard">
            <img src={picture} alt="profile pic" />
            <div>
                <p><strong>First name:</strong> {firstName}</p>
                <p><strong>Last name:</strong> {lastName}</p>
                <p><strong>Gender:</strong> {gender}</p>
                <p><strong>Height:</strong> {height}</p>
                <p><strong>Birth:</strong> {birth.toDateString()}</p>

            </div>
        </div>
    );
}

export default IdCard;
