import React from 'react'

const InputDisplay = (props) => {

    const handleChange = (e, i )=>{
        const allShows = [...props.shows]
        allShows[i].recommended = e.target.checked
        props.updateShows(allShows)
    }

    const handleDelete = (deleteIdx)=>{
        const filteredShows = props.shows.filter((show, i)=> i!== deleteIdx)
        props.updateShows(filteredShows)
    }

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th> # </th>
                        <th> Title </th>
                        <th> Genre </th>
                        <th> Recommended? </th>
                        <th> Remove Show </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.shows.map((show, i) => {
                            return (
                                <tr key={i}>
                                    <td> {i + 1} </td>
                                    <td> {show.title} </td>
                                    <td> {show.genre} </td>
                                    <td>
                                        <input type="checkbox" name="recommended"
                                            checked={show.recommended}
                                            onChange={e => handleChange(e, i)} />
                                    </td>
                                    <td>
                                        <button className="btn btn-danger" 
                                            onClick={()=>handleDelete(i)}
                                        > Remove </button>
                                    </td>


                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default InputDisplay