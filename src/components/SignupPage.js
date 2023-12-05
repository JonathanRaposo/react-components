import { useState } from 'react';

const SignupPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nationality, setNationality] = useState('');

    console.log(nationality)
    return (
        <div className='SignupPage'>
            <form>
                <label htmlFor='email'>Email</label>
                <input
                    type='email'
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor='password'>Password</label>
                <input
                    type='password'
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor='nationality'>Nationality</label>
                <select onChange={(e) => setNationality(e.target.value)}>
                    <option checked>English</option>
                    <option>German</option>
                    <option>French</option>
                </select>

                <buttom type="submit" id="signup-btn">Signup</buttom>


            </form>
        </div>
    );
}

export default SignupPage;