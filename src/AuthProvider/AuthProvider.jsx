import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import { auth } from '../firebase/firebase.config';
import { toast } from "react-hot-toast";
export const AuthContext = createContext()

const AuthProvider = ({children}) => {
	const [user, setUser] = useState(null)
	console.log(10, user);
	// login with google
	const googleProvider = new GoogleAuthProvider();

	const googleLogin = () => {
		signInWithPopup(auth, googleProvider)
		.then(() => {
			toast.success('Login Successfully')
		})
		.catch(() => {
			console.log("Login failed");
		})
	}

	// login with github
	const githubProvider = new GithubAuthProvider()
	const githubLogin = () => {
		signInWithPopup(auth, githubProvider)
		.then(() => {
			toast.success('Login Successfully')
		})
		.catch(() => {
			console.log("Login failed");
		})
	}

	// sign up with email & password
	const signUp = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password)
	}

	
	// sign in with email & password
	const signIn = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password)
	}

	// sign out
	const logOut = () => {
		return signOut(auth)
	}

	useEffect(() => {
		const unSubscribe = onAuthStateChanged(auth, (user) => {
			setUser(user)
		})
		return ()=> {
			return unSubscribe();
		}

	},[])


	const AuthData = {
		user,
		googleLogin,
		githubLogin,
		signUp,
		signIn,
		logOut,
	}

	return (
		<AuthContext.Provider value={AuthData}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;

AuthProvider.propTypes = {
	children: PropTypes.node.isRequired,
}