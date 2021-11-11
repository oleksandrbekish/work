
import { React, useState } from 'react';

import './App.css';
import data from './m-d.json';



function App() {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    firstN: '',
    lastN: '',
    log: '',
    ema: '',
    pass: '',
    phon: '',
    reppass: ''
  })
  const handleAddFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    setAddFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    console.log(addFormData)
    //debugger
    /*if (funcValidName(addFormData.firstN)) {
      if (funcValidName(addFormData.lastN)) {
        if (funcValidLogin(addFormData.log)) {
          if (funcValidEmail(addFormData.ema)) {
            if (addFormData.pass === addFormData.reppass) {
              if (funcValidPhone(addFormData.phon)) {
                console.log('good')
                
                event.preventDefault()
                const newContact = {
                  firstN: addFormData.firstN,
                  lastN: addFormData.lastN,
                  log: addFormData.log,
                  ema: addFormData.ema,
                  pass: addFormData.pass,
                  reppass: addFormData.reppass,
                  phon: addFormData.phon
                }
                console.log(contacts)
                setContacts([...contacts, newContact])
                
              }
            }
          }
        }
      }
      else {
        console.log('error1')
      }
    }
    else {
      console.log(contacts)
      console.log('error')
    }*/
    if (!!funcValidName(addFormData.firstN) &&
      !!funcValidName(addFormData.lastN) &&
      !!funcValidLogin(addFormData.log) &&
      !!funcValidEmail(addFormData.ema) &&
      !!funcValidPhone(addFormData.phon) &&
      addFormData.pass === addFormData.reppass
    ) 
     {
       funcValidName(addFormData.firstN)
      //console.log("test");
      event.preventDefault();
      const newContact = {
        firstN: addFormData.firstN,
        lastN: addFormData.lastN,
        log: addFormData.log,
        ema: addFormData.ema,
        pass: addFormData.pass,
        reppass: addFormData.reppass,
        phon: addFormData.phon
      }
      

      const newContacts = [...contacts, newContact]
      setContacts(newContacts);
      console.log(contacts)
    }
    else {
      console.log('error')
    }

    
    if (addFormData.pass === addFormData.reppass) {
      console.log('true pass')
    } else {
      console.log("error pass")
    }


  }


  function funcValidName(value) {
    const my_regex = /^[А-ЯЁ][а-яА-ЯёЁ\s]+$/;
    const reqex = my_regex.test(value)
    //console.log(reqex)
    if (reqex) {
      if (value.charAt(0) === value.charAt(0).toUpperCase()) {
        console.log("success")
        return true

      }
      else {
        return false
      }
    }
    else {
      return false
    }
  }


  function funcValidLogin(value) {
    console.log(value)
    const my_regex1 = /^[a-z\s]+$/;
    const regex1 = my_regex1.test(value)
    //console.log(regex1, 'log')
    if(regex1){
      return true
    }
  }


  function funcValidEmail(value) {
    const my_regex2 = /^[a-z0-9._%+-]+@[a-z0-9-]+.+.[a-z]{2,4}$/;
    const regex2 = my_regex2.test(value)
    console.log(regex2, "email")
    if(regex2){
      return true
    }
  }


  function funcValidPhone(value) {
    const my_regex3 = /^\+38\(\d{3}\)\d{3}-\d{2}-\d{2}$/;
    const regex3 = my_regex3.test(value)
    console.log(regex3, "phone")
    if(regex3){
      return true
    }

  }


  return (
    <div>
      <h1 className="name">Practice lesson #Registration#</h1>
      <div className="main">
        <div className="registration">
          <h2 className="registration__name">Create new users</h2>
          <div className="registration__table">
            <form className="registration__table__form" onSubmit={handleAddFormSubmit} action="#">
              <div>
                First_Name:

                <input onChange={handleAddFormChange} type="text" className="registration__table__form__first_name" name="firstN" /><br></br><br></br>

              </div>
              Last_Name: <input onChange={handleAddFormChange} type="text" className="registration__table__form__last_name" name="lastN" /><br></br><br></br>
              Login: <input onChange={handleAddFormChange} type="text" name="log" className="registration__table__form__login" /><br></br><br></br>
              Email: <input onChange={handleAddFormChange} type="text" name="ema" className="registration__table__form__email" /><br></br><br></br>
              Password: <input onChange={handleAddFormChange} type="password" name="pass" className="registration__table__form__password" /><br></br><br></br>
              Repeat Password: <input onChange={handleAddFormChange} name='reppass' type="password" className="registration__table__form__repeat_password" /><br></br><br></br>
              Phone: <input type="text" onChange={handleAddFormChange} name="phon" className="registration__table__form__phone" placeholder="+38(097)475-87-16" /><br></br><br></br>
              <button type='submit' className="registration__table__form__button" >Create</button>
            </form>
          </div>
        </div>
        <div className="users_list">
          <h2 className="users_list__name">List of users</h2>
          <table className="users_list__table">
            <thead>
              <tr className="users_list__table__first_tr">
                <th><b>№</b></th>
                <th><b>First Name</b></th>
                <th><b>Last Name</b></th>
                <th><b>Login</b></th>
                <th><b>Email</b></th>
                <th><b>Phone</b></th>
                <th><b>Password</b></th>
              </tr>
            </thead>
            <tbody className="user_list_table_body">
              {contacts.map((contacts) => (
                <tr>
                  <td><b>{ }</b></td>
                  <td><b>{contacts.firstN}</b></td>
                  <td><b>{contacts.lastN}</b></td>
                  <td><b>{contacts.log}</b></td>
                  <td><b>{contacts.ema}</b></td>
                  <td><b>{contacts.phon}</b></td>
                  <td><b>{contacts.pass}</b></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
