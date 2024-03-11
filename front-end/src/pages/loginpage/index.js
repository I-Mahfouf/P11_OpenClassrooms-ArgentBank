import React from 'react';

import Header from '../../components/header/index';
import Form from '../../components/form/index';
import Footer from '../../components/footer/index';

function Login() {
  return (
    <div>
      <Header />
      <main className="bg-dark">
        <Form />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Login;