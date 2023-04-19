import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='text-lg flex justify-between'>
            <Link>Private Hotel</Link>
            <div className='text-violet-600 flex gap-10'>
                <Link to='/'>Home</Link>
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
                <Link to='/book'>Book</Link>
                <Link to='/profile'>Profile</Link>
            </div>
        </div>
    );
};

export default Header;