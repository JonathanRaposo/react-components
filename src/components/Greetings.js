
const Greetings = ({ lang, children }) => {

    const translate = (language, name) => {

        let msg;
        switch (language) {
            case 'de':
                msg = 'Halo';
                break;
            case 'en':
                msg = 'Hello';
                break;
            case 'es':
                msg = 'Hola';
                break;
            case 'fr':
                msg = 'Bonjour';
                break;
            default:
                msg = 'Hello'

        }


        return <p>{msg} {name}</p>
    }



    return (
        <div className="Greetings">
            {translate(lang, children)}
        </div>
    )
}

export default Greetings;