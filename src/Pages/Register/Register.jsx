import { BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import Navbar_2 from "../../components/Header/Shared/Navbar/Navbar_2";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Register = () => {
	const {googleLogin, githubLogin, signUp } = useContext(AuthContext)
	const [password, setPassword] = useState("")
	const [emails, setEmail] = useState("")
	const [error, setError] = useState("")
	const [success, setSuccess] = useState("")

	
	const handleRegistration = e => {
		e.preventDefault();
		const form = new FormData(e.currentTarget)
		const firstName = form.get("first_name")
		const lastName = form.get("last_name")
		const fullName = firstName + " " + lastName;
		const email = form.get("email")
		setEmail(email)


		setSuccess("")
		setError("")
		setPassword("")
		const password = form.get("password")
		const conformPassword = form.get("conform_password")

		if(password.length < 6 ){
			setError("password must be at least 6 characters")
		}
		if(password === conformPassword){
			setPassword(password)
			return setSuccess("registration successful");
		}
		else{
			setError("Invalid password");
		}
	}
	signUp(emails, password)
	
	return (
		<>
			<Navbar_2></Navbar_2>
			<div className="hero min-h-screen bg-base-200">
				<div className="hero-content flex-col ">
					<div className="text-center ">
						<h1 className="text-5xl font-bold">Create an account</h1>
					</div>
					<div className="card flex-shrink-0 w-[400px] shadow-2xl bg-base-100">
						<form onSubmit={handleRegistration} className="card-body">
							<div className="form-control">
								<input type="text" placeholder="First Name" name="first_name" className="input input-bordered" required />
							</div>
							<div className="form-control">
								<input type="text" placeholder="Last Name" name="last_name" className="input input-bordered" required />
							</div>
							<div className="form-control">
								<input type="text" name="email" placeholder="Username or Email" className="input input-bordered" required />
							</div>
							<div className="form-control">
								<input type="password" name="password" placeholder="Password" className="input input-bordered" required />

							</div>
							<div className="form-control">
								<input type="password" name="conform_password" placeholder="Conform Password" className="input input-bordered" required />
								<div className="flex justify-between">
									<div className="flex items-center ">
										<input type="checkbox" name="checkbox" id="" className="mr-3" />
										Remember Me
									</div>
									<label className="label">
										<button className="text-[#F9A51A] underline">Forgot Password</button>
									</label>
								</div>
							</div>

							{
								error && <p className="text-red-700">{error}</p>
							}
							{
								success && <p className="text-green-700">{success}</p>
							}

							<div className="form-control mt-6">
								<input className="btn btn-primary" type="submit" value="Register" />
							</div>
							<p>Already have an account? <Link to={"/login"} className="text-[#F9A51A] underline">Login</Link></p>

							{/* log in with google and github */}
							<div className="flex items-center mx-auto">
								<span><hr className="w-40" /></span>
								OR
								<span><hr className="w-36" /></span>
							</div>

							<button onClick={googleLogin} className=" w-full border rounded-2xl py-2 flex items-center gap-2"><FcGoogle className="text-2xl ml-2" /> <span className=" mx-auto">Continue with Google</span></button>
							<button onClick={githubLogin} className=" w-full border rounded-2xl py-2 flex items-center gap-2"><BsGithub className="text-2xl ml-2" /> <span className=" mx-auto">Continue with Github</span></button>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default Register;