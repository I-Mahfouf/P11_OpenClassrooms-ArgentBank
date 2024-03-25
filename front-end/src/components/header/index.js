import React, { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'; 
import Logo from '../../assets/argentBankLogo.png';
import { userLogout, setLoggedIn } from '../../redux/actions/authActions';
import { fetchUserProfile } from '../../redux/actions/profileActions'; 

import './styles.css';

const Header = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const userProfile = useSelector((state) => state.profile.userProfile); 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(userLogout());
    navigate ('/login');
  };

  useEffect(() => {
    const tokenLocal = localStorage.getItem('token');
    const tokenSession = sessionStorage.getItem('token');
    
    if (tokenLocal || tokenSession) {
      dispatch(setLoggedIn());
      dispatch(fetchUserProfile());
    }
  }, [dispatch]);

  return (
    <nav className='main-nav'>
      <NavLink to='/' className='main-nav-logo'>
        <img src={Logo} alt='Argent Bank Logo' className='main-nav-logo-image' />
        <h1 className='sr-only'>Argent Bank</h1>
      </NavLink>
      <div>
        {isLoggedIn ? (
          <>
            <NavLink to='/userpage' className='main-nav-item'>
              <i className='fa fa-user-circle'></i>
              {userProfile.userName} 
            </NavLink>
            <button className='main-nav-item-logout' onClick={handleLogout}>
              <i className='fa fa-sign-out'></i>
              Logout
            </button>
          </>
        ) : (
          <NavLink to='/login' className='main-nav-item'>
            <i className='fa fa-user-circle'></i>
            Sign In
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default Header;
