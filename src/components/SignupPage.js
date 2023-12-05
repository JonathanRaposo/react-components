import { useState } from 'react';

const SignupPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nationality, setNationality] = useState('');



    const isValidEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);

    }

    const isStrongPassword = (password) => {
        return /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(password);

    }
    console.log('is email valid: ', isValidEmail(email))
    console.log('is password strong:', isStrongPassword(password))

    return (
        <div className='SignupPage'>
            <form>
                <label htmlFor='email'>Email</label>
                <input
                    type='email'
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                        border: email ? isValidEmail(email) ?
                            '2px solid green'
                            : '2px solid red'
                            : '2px solid #ccc'
                    }}

                />
                {isValidEmail(email) &&
                    <p id="green-para">You typed a valid email</p>
                }
                <label htmlFor='password'>Password</label>
                <input
                    type='password'
                    name="password"
                    id='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{
                        border: password ? isStrongPassword(password)
                            ? '2px solid green'
                            : '2px solid red'
                            : '2px solid #ccc'
                    }}
                />

                {!isStrongPassword(password) && password && (
                    <p id="red-para">Your password is too weak</p>
                )}

                <label htmlFor='nationality'>Nationality</label>
                <select onChange={(e) => setNationality(e.target.value)}>
                    <option value="en">English</option>
                    <option value="de">German</option>
                    <option value="fr">French</option>
                </select>

                <button type="submit">Signup</button>


            </form>

            <div class="display-messages">
                <p>
                    {
                        nationality === 'en' ? 'Hello' :
                            nationality === 'de' ? 'Hallo' :
                                nationality === 'fr' ? 'Bonjour' :
                                    ''
                    }
                </p>
                {isValidEmail(email) && email && <p>Your email is: {email}</p>}
                {isValidEmail(email) && email && <p>Your email is correct</p>}
            </div>
        </div>
    );
}

export default SignupPage;