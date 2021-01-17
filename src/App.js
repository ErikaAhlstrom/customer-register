import React, {useState} from 'react'
import {Route, Switch} from 'react-router-dom'
import { UserDataContext } from './contexts/UserDataContext';
import CreateCustomerPage from './pages/CreateCustomerPage';
import CustomerDetailPage from './pages/CustomerDetailPage';
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import UpdateCustomerPage from './pages/UpdateCustomerPage';

function App() {
  const [user, setUser] = useState(null)
  const [customerList, setCustomerList] = useState(null)

  function getCustomerList() {
    const url = "https://frebi.willandskill.eu/api/v1/customers/"
    const token = localStorage.getItem("ea")
    fetch(url, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })
    .then(res => res.json())
    .then(data => {
        setCustomerList(data.results)
    })
}

  function getMe() {
      const url = "https://frebi.willandskill.eu/api/v1/me/"
      const token = localStorage.getItem("webb20")
      fetch(url, {
          headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
      }
      })
      .then(res => res.json())
      .then(data => setUser(data))
  }

  

  return (
    <div className="">
      
      <UserDataContext.Provider value={{customerList, setCustomerList, user, setUser, getMe, getCustomerList}}>  
          <Switch>

            <Route path="/customers/create">
              <CreateCustomerPage />
            </Route>

            <Route path="/customers/:id/update" component={UpdateCustomerPage}/>

            <Route path="/customers/:id" component={CustomerDetailPage}/>

            <Route path="/home">
              <HomePage />
            </Route>

            <Route path="/">
              <LoginPage />
            </Route>
          </Switch>        
      </UserDataContext.Provider>
    </div>
  );
}

export default App;
