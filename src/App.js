import React from 'react';
import Login from './components/auth/Login';
import NewAccount from './components/auth/NewAccount';
import Inventory from './components/allcars/Inventory';
import MyCollection from './components/mycars/MyCollection';
import InventoryState from './context/allCars/inventoryState';
import MycollectionState from './context/myCars/mycollectionState';
import NotFound from './components/NotFound';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

const App = () => {

    return (
        <InventoryState>
            <MycollectionState>
                <Router>
                    <Routes>
                      <Route path='/' element={<Login/>} />
                          <Route path='/new-account' element={<NewAccount /> }/>
                          <Route path='/inventory' element={<Inventory />} />
                          <Route path='/mycollection' element={<MyCollection />} />
                          <Route path='*' element={<NotFound />} />
                    </Routes>
                </Router>
            </MycollectionState>
        </InventoryState>
    );
}
 
export default App;