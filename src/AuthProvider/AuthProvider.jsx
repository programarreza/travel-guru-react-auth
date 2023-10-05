import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import PropTypes from 'prop-types';
import { createContext } from "react";
import { auth } from '../firebase/firebase.config';
import { toast } from "react-hot-toast";

export const AuthContext = createContext()

const AuthProvider = ({children}) => {

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


	const AuthData = {
		googleLogin,
		githubLogin,
		signUp,
		signIn
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