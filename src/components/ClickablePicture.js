import maxence from '../assets/images/maxence.png';
import maxenceWithGlasses from '../assets/images/maxence-glasses.png';
import { useState } from 'react';


const ClickablePicture = () => {

    const [click, setClick] = useState(true);

    const handleClick = () => {
        setClick(!click);
    }


    const imgStyle = {
        width: '200px',
        borderRadius: '10px',
        display: 'block',
        margin: 'auto'
    }
    return (
        <div className="ClickablePicture">
            <img src={click ? maxence : maxenceWithGlasses} onClick={handleClick} alt="maxence" style={imgStyle} />
        </div>
    );
}

export default ClickablePicture;