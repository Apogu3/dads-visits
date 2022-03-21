import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { auth, db } from '../firebase';
import { signOut } from 'firebase/auth';
import { updateDoc, doc } from 'firebase/firestore';
import { AuthContext } from '../context/auth';


const Navigation = () => {
    const { user } = useContext(AuthContext);
    const handleSignout = async () => {
        await updateDoc(doc(db, 'users', auth.currentUser.uid), {
            isOnline: false,
        });
        await signOut(auth);
    };
    return (
           
           <>
           <nav>
               <div>
                <Link to="/">Home</Link>
                <Link to="/chat">Chat</Link>
                <Link to="/resources">Resources</Link>
                <Link to="/schedule">Schedule</Link>
                </div>
           <div>
               {user ?  (
              <>
                <Link to="/profile">Profile</Link>
                <button className="btn" onClick={handleSignout}>
                    Logout
                </button>
              </> 
             ) : (             
              <>
                <Link to="/register">Register</Link>
                <Link to="/login">Login</Link> 
              </>
            
            )}
             </div>  
           
        </nav>
        </>
    );
};

export default Navigation;
