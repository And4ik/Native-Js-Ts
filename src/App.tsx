import React from 'react';
import './App.css';



function App() {
    const names = ["Dimych","Andrey","Katia","Vova","Yuliya",]
    const users = [{name:"Dimych"},{name:"Andrey"},{name:"Katia"},{name:"Vova"},{name:"Yuliya"},]
    const liElements = names.map((n, index) => <li key={index}>{n}</li>)
    const liEL = users.map((u, index) => <li key={index}>{u.name}</li>)
    return (
        <div className="App">
            <ul>
                {liElements}
                {liEL}
            </ul>
        </div>
    );
}

export default App;



