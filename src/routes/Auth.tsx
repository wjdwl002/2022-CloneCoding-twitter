import React from 'react';

const Auth = () => (
  <div>
    <form action="">
      <input type="text" placeholder="Email" required />
      <input type="text" placeholder="Password" required />
      <input type="submit" value="Log In" />
    </form>
    <div>
      <button>Continue with Google</button>
      <button>Continue with Github</button>
    </div>
  </div>
);

export default Auth;
