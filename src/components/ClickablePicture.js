
import { useState } from 'react';


const ClickablePicture = ({ img, imClicked }) => {

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
            <img src={click ? img : imClicked} onClick={handleClick} alt="maxence" style={imgStyle} />
        </div>
    );
}

export default ClickablePicture;