import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from 'react';
import Photo from './Component/Photo';
import PhotoStyle from './Component/PhotoStyle.css';
function App() {
  const [data, setdata] = useState([])
  const [member, setmember] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res=>res.json())
    .then(data=>setdata(data))
  }, [])
  function addMember(id){
    setmember([...member,id])
  }
  return (
    <div className="data-style">
      <div className="Show-details">
        {
          data.map(data=><Photo data={data} addMember={addMember} ></Photo>)
        }
      </div>
      <div>
        <h1>Select Photo</h1>
        <div>
          <ul>
            {
              member.map(member=><li>User Id:{member}</li>)
            }
          </ul>
          
        </div>
      </div>
    </div>
  );
}

export default App;
