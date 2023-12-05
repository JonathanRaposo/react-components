import profiles from '../data/berlin.json';
import { useState } from 'react';



const FaceBook = () => {
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [query, setQuery] = useState('');
    const [sortType, setSortType] = useState('');


    const handleClick = (country) => {
        setSelectedCountry(country);
    }

    const getUniqueCountries = (arr) => {
        const countries = arr.map((students) => students.country);
        return [...new Set(countries)];
    }

    const uniqueCountries = getUniqueCountries(profiles);


    const handleSearch = (e) => {
        setQuery(e.target.value)
    }


    const getFilteredProfiles = (query, arr) => {

        const filteredProfiles = arr.filter((profile) => (
            profile.firstName.toLowerCase().includes(query.toLowerCase()) ||
            profile.lastName.toLowerCase().includes(query.toLowerCase()) ||
            profile.country.toLowerCase().includes(query.toLowerCase())
        )
        )
        if (!filteredProfiles.length) {
            return arr;
        }
        return filteredProfiles
    }
    let filteredProfiles = getFilteredProfiles(query, profiles);




    const handleSort = (type) => {
        setSortType(type);
        console.log(sortType)
    }
    if (sortType === 'firstName') {
        filteredProfiles = filteredProfiles.sort((a, b) =>
            a.firstName > b.firstName ? 1 : -1);
    } else if (sortType === 'lastName') {
        filteredProfiles = filteredProfiles.sort((a, b) =>
            a.lastName > b.lastName ? 1 : -1);
    } else if (sortType === 'country') {
        filteredProfiles = filteredProfiles.sort((a, b) =>
            a.country > b.country ? 1 : -1);
    }

    return (
        <div className='FaceBook'>
            <div className='SearchBar'>
                <label htmlFor='search'>Search student</label>
                <input type="text" id="search" onChange={handleSearch} placeholder='Search by name or keyword' />
            </div>
            <div className='Button'>
                {uniqueCountries.map((country, index) => (
                    <button
                        key={index}
                        onClick={() => handleClick(country)}
                        style={{
                            backgroundColor: selectedCountry === country ? 'lightblue' : 'transparent'
                        }}

                    >

                        {country}
                    </button>
                ))}
            </div>
            <div className='sort-buttons'>
                <button onClick={() => handleSort('firstName')}>Sort by first name</button>
                <button onClick={() => handleSort('lastName')}>Sort by last name</button>
                <button onClick={() => handleSort('country')}>Sort by country</button>

            </div>


            {filteredProfiles.map((profile, index) => {
                return (
                    <div key={index} className="FaceBookCard">
                        <img src={profile.img} alt="profile pic" />
                        <div
                            style={{
                                backgroundColor: selectedCountry === profile.country ? 'lightblue' : 'white'
                            }}>
                            <p><strong>First name:</strong> {profile.firstName}</p>
                            <p><strong>Last name:</strong> {profile.lastName}</p>
                            <p><strong>Country:</strong> {profile.country}</p>
                            <p><strong>Type:</strong> {profile.isStudent ? 'Student' : 'Teacher'}</p>

                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default FaceBook;
