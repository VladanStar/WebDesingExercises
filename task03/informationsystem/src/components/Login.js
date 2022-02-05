import React, {useState} from 'react';

const Login = (props) => {
    const[loginForm, setLoginForm] = useState({
        username:'',
        password:''
    })
    const [error, setError] = useState('');

    function onChange(event){
        const {name, value} = event.target;
        setLoginForm(oldForm =>({...oldForm,[name]:value}))
    }

    function onSubmit(e) {
        e.preventDefault();
        setError("");
        const body = `username=${loginForm.username}&password=${loginForm.password}`;
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: body
        };
        fetch('/login', options)
          .then(response => {
            if (response.status === 401) {
              setError("Login failed");
            } else {
              props.onLogin();
            }
          });
      }
    

  return (
  <div className='Login'>
      <form onSubmit={onSubmit}>
          <div className="FormRow">
              <label> UserName</label>
              <input type="text" name='username' onChange={onChange} value={loginForm.username} />
            </div>
            <div className="FormRow">
                <label >Password</label>
                <input type="password" name='password' onChange={onChange}  value={loginForm.password}/>
            </div>
            <button type='submit'>Login</button>
      </form>

  </div>
  )
};

export default Login;
