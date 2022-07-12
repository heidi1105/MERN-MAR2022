import React, { useEffect, useState } from 'react';

const TimeDisplay = () => {
    const [time, setTime] = useState(new Date().toLocaleString());
 
    useEffect(() => {
        const int = setInterval(
            () => {
                console.log(int)
                setTime(new Date().toLocaleString())
            },
            1000
        );

        return function clearInt() {
            console.log("Cleaning up")
            clearInterval(int);
        }
    }, []);
 
    return (
        <div>Current Time: {time}

        
        </div>
    );
}

export default TimeDisplay