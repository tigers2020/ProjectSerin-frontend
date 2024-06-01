import React from 'react';
import Link from 'next/link';

const Home: React.FC = () => {
    return (
        <div>
            <h1>Home</h1>
            <nav>
                <ul>
                    <li><Link href="/Account/Register/">Register</Link></li>
                    <li><Link href="/Account/Login/">Login</Link></li>
                    <li><Link href="/Account/Logout/">Logout</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Home;
