import React, { useState, useEffect } from "react";

function App() {
    const [imgSrc, setImgSrc] = useState('')
    const [isLoaded, setLoading] = useState(false)
    useEffect(()=> {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then( res => res.json())
        .then(data => {
            setImgSrc(data.message)
            setLoading(true)
        });

        
    }, [])

    if (!isLoaded) return <p>Loading...</p>;

    return <img src={imgSrc} alt="A Random Dog"></img>
}