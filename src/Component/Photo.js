import React,{ useState }from 'react'
import PhotoStyle from '../Component/PhotoStyle.css'
export default function Photo(props) {
    const {id,albumId,title,url,thumbnailUrl}=props.data
    const [ShowId, setId]=useState([])
    function IdValue(){
        setId(id)
    }
    return (
        <div className="album">
            <h1></h1>
            <h3>Show id no:{ShowId}</h3>
            <h1>{title}</h1>
            <img src={thumbnailUrl} alt=""/>
            <button onClick={IdValue}>Show id</button>
            <button onClick={()=>props.addMember(id)}>Add</button><br />         
        </div>
    )
}
