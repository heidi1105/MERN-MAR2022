import React from 'react'
import {useParams} from "react-router"

const Keyword = () => {
    const {keyword, textcolor} = useParams()

    return (
        <fieldset>
            <legend> Keyword.jsx</legend>
            <h1 style={{color:textcolor}}> You search for {keyword}</h1>
        </fieldset>
    )
}

export default Keyword