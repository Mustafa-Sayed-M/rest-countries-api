import React, { useEffect, useState } from 'react';

const moodIcon = <i className="fa-solid fa-moon fa-fw"></i>;
const sunIcon = <i className="fa-regular fa-sun fa-fw"></i>;

function TogglerMood() {

    const [currentMood, setCurrentMood] = useState('light');

    // Stored Mood in LocalStorage
    useEffect(() => {
        const storedMood = window.localStorage.getItem('mood');
        if (storedMood) {
            setCurrentMood(storedMood);
        }
    }, []);

    // Toggler Mood
    useEffect(() => {
        if (currentMood === 'light') {
            document.body.classList.remove('dark');
        } else {
            document.body.classList.add('dark');
        }
    }, [currentMood]);

    // Handle Change Mood
    const handleChangeMood = () => {
        const mood = currentMood === 'light' ? "dark" : "light";
        setCurrentMood(mood);
        saveToLocalStorage(mood);
    };

    // Save Mood in LocalStorage
    const saveToLocalStorage = (mood) => {
        window.localStorage.setItem('mood', mood);
    };

    return (
        <button type='button' onClick={handleChangeMood} className='toggler-mood' aria-label='toggler-mood'>
            {
                currentMood === 'light' ? moodIcon : sunIcon
            }
            <span className='ms-2'>Dark Mood</span>
        </button>
    )
}

export default TogglerMood;