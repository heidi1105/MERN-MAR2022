import React from 'react'

const InputDisplay = (props) => {

  const updatedShows = [...props.shows]

  const recHandler = (i, newValue) =>{
    updatedShows[i].recommended = newValue
    props.handleUpdate(updatedShows)
  }

  const deleteHandler = (deleteIdx)=>{
    const filteredShows = props.shows.filter((show, i)=> i!== deleteIdx )
    props.handleUpdate(filteredShows)
  }
  
  const strikeStyle = {
    color: 'red'
  }

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th> # </th>
            <th> Title </th>
            <th> Genre </th>
            <th> Recommended </th>
            <th> Delete </th>
          </tr>
        </thead>
        <tbody>
          {
            props.shows.map((show, i)=>{
              return (
                  <tr key={i} style={{ color: show.recommended ?'red':'teal'}} >
                  <td> {i +1}</td>
                  <td > <span >{show.title}</span></td>
                  <td> {show.genre}</td>
                  <td> {show.recommended?"Yes":"No"}
                    <input type="checkbox" checked={show.recommended} 
                      onChange={e => recHandler(i, e.target.checked)}
                    />
                  </td>
                  <td>
                    <button className="btn btn-danger"
                      onClick={()=>deleteHandler(i)}
                    > Delete</button>
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