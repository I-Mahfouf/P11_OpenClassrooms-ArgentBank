import React from 'react';

import Header from '../../components/header/index';
import ProfileAccount from '../../components/profileAccount/index';
import ProfileEdit from '../../components/profileEdit/index';
import Footer from '../../components/footer/index';

function userProfile() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main className="bg-dark">
        <ProfileEdit />
        <h2 className="sr-only">Accounts</h2>
        <div className="group-accounts">
          <ProfileAccount title="Argent Bank Checking (x8349)" amount="$2,082.79" description="Available Balance" />
          <ProfileAccount title="Argent Bank Savings (x6712)" amount="$10,928.42" description="Available Balance" />
          <ProfileAccount title="Argent Bank Credit Card (x8349)" amount="$184.30" description="Current Balance" />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default userProfile;