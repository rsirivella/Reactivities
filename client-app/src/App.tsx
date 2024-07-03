import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import { Header, List } from 'semantic-ui-react';
// import DuckItem from './DuckItem'
// import { ducks } from './demo'

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/activities')
    .then(response =>{
      setActivities(response.data)
    })
  }, [])

  return (    
    <div>
      <Header as ='h2' icon='users' content="Reactivities" />
      <List>
       {activities.map((activity: any) => (
        <List.Item key={activity.id}>
          {activity.title}
        </List.Item>

      ))}
      </List>      
    </div>
    
    // using type sccript with react examples, used DuckItem.tsc file.
    // <div>
    //   <h1>Reactivities</h1>
    //   {ducks.map(duck => (
    //     <DuckItem key={duck.name} duck={duck}/>
    //     // <div key={duck.name}> 
    //     //   <span>{duck.name}</span>
    //     //   <button onClick={() => duck.makeSound(duck.name + ' Quack')}> Make Sound </button>
    //     // </div>
    //   ))}
    // </div>
  )
}

export default App
