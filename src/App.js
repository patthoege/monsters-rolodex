import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: 'Patty',
          id: '123'
        },
        {
          name: 'Mila',
          id: '1234'
        },
        {
          name: 'Yash',
          id: '12345'
        },
        {
          name: 'Bhumi',
          id: '12465463'
        },
      ],
    };
  }

    render () {
      return (
        <div className="App">
          {
            this.state.monsters.map((monster) => {
              return <div key={monster.id}><h1>{monster.name}</h1></div>;
            })
          }
        </div>
      );
    }
  }


export default App;
