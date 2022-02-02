import React from 'react';

const Login = () => {
  return (
  <div className='Login'>
      <form>
          <div className="FormRow">
              <label> UserName</label>
              <input type="text" name='username' />
            </div>
            <div className="FormRow">
                <label name="password">Password</label>
            </div>
            <button type='submit'>Login</button>
      </form>

  </div>
  )
};

export default Login;
