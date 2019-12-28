import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component'
import { Switch ,Route , Link} from 'react-router-dom'
import ShopPage from './pages/shoppage/shoppage.component'

// const Hats = (props) => {
//     console.log(props);
//     return(
//         <div>
//
//             <button onClick={() =>props.history.push('/')}>Home</button>
//             Hats
//         </div>
//     )
// }

function App() {
  return (
    <div>
        <Switch>
            <Route exact path='/' component={Homepage} />
            <Route path='/shop' component={ShopPage} />
        </Switch>
    </div>
  );
}

export default App;
