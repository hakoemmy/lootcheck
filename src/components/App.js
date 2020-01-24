import React, {Component} from 'react';
import Wallet from './wallet';

class App extends Component{
    render(){
        return (<div>
                 <h2>Lootcheck</h2>
                 <hr/>
                 <Wallet/>
              </div>);
    }
}

export default App;