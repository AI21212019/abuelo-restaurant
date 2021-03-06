import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile
} from 'firebase/auth';
import { useEffect, useState } from 'react';
// import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';

const useFirebase = () => {
  const [user, setUser] = useState({});
  const auth = getAuth();
  const navigate = useNavigate();
  // const navigate = useNavigate();

  //on State Change
  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user);
      }
    });
  }, [auth]);

  //sign up functionality
  const signUpUser = (email, password, name) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(res => {
        setUser(res.user);
        updateProfile(auth.currentUser, {
          displayName: name
        }).then(() => {
          swal('Good job!', 'Account has been created!', 'success');
          navigate('/');
          // navigate('/');
        });
      })
      .catch(err => swal('Something went wrong!', `${err.message}`, 'error'));
  };

  //sign in functionality
  const signInUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(res => {
        setUser(res.user);
        swal('Sign in Successful!', 'Welcome back !', 'info');
        navigate('/');
        // navigate('/');
      })
      .catch(err => swal('Something went wrong!', `${err.message}`, 'error'));
  };

  //google sign in
  const signInWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then(res => {
        setUser(res.user);
        swal('Good job!', 'Account has been created!', 'success');
        navigate('/');
      })
      .catch(err => console.log(err.message));
  };

  // sign out
  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        setUser({});
        swal('Logout Successful!', 'You are logged out!', 'success');
        navigate('/signin');
      })
      .catch(err => {
        swal('Something went wrong!', `${err.message}`, 'error');
      });
  };

  return {
    user,
    signUpUser,
    signInUser,
    signOutUser,
    signInWithGoogle
  };
};

export default useFirebase;
