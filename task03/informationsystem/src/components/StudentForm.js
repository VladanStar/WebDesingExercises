import React, {useState} from 'react';

const StudentForm = () => {



    const[form, setForm] = useState({
        jmbg:'',
        firstName:'',
        lastName:''
    })
    function onChange(event){
        const{name, value} = event.target;
        setForm(oldForm =>({...oldForm, [name]:value}))
    }
    function isValid(){
        const{jmbg, firstName, lastName} = form;
        return jmbg.length === 13 && firstName.length >0 && lastName.length >0
    }

    function onSubmit(e){
        e.preventDefault();
        const data ={
            jmbg:form.jmbg,
            firstName: form.firstName,
            lastName:form.lastName
        };
        const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          };
          return fetch('/students.json', options)
        
    
      
    }
  return(
  
  <div className='StudentForm'>
      <h2>New student</h2>

      <form  onSubmit={onSubmit}>
          <div className="FormRow">
              <label htmlFor="#">jmbg</label>
              <input type="text" name='jmbg'  onChange={onChange} value={form.jmbg}/>

          </div>
          <div className="FormRow">
              <label htmlFor="#">FirstName</label>
              <input type="text" name='firstName' onChange={onChange} value={form.firstName} />

          </div>
          <div className="FormRow">
              <label htmlFor="#">LastName</label>
              <input type="text" name='lastName' onChange={onChange} value={form.lastName} />

          </div>
          <button type='submit' disabled={!isValid()}>Add Student</button>

      </form>

  </div>
  )
};

export default StudentForm;
