'use client';

import Link from "next/link";
import styles from './navbar.module.css';

export default function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className={styles.logo} href="/">Teo&apos;s FileServer</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto" id={styles.navbarNav}>
                        <li className='nav-item'>
                            {/* <SearchBar /> */}
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" href="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/admin">Admin</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href='/login'>LogOut</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}