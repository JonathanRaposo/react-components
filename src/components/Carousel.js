import { useState } from 'react';

const Carousel = ({ images }) => {
    const [imageIndex, setImageIndex] = useState(0);



    const goToPrevious = () => {
        const newImageIndex = (imageIndex - 1 + images.length) % images.length;

        setImageIndex(newImageIndex);
    }

    const goToNext = () => {
        const newImageIndex = (imageIndex + 1) % images.length;
        setImageIndex(newImageIndex);
    }

    return (
        <div className="Carousel">
            <img src={images[imageIndex]} alt="portrait" />
            <button onClick={goToPrevious}>Previous</button>
            <button onClick={goToNext}>Next</button>

        </div>
    );
}

export default Carousel;