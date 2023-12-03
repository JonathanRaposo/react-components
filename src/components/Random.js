const Random = ({ min, max }) => {


    const getRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }
    return (
        <div className="Random">
            <hr />
            <p>Random value between {min} and {max} {'=>'} {getRandomNumber(min, max)}</p>
            <hr />
        </div>
    );
}

export default Random;