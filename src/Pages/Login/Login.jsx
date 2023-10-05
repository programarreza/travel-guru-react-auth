import { BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import Navbar_2 from "../../components/Header/Shared/Navbar/Navbar_2";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Toaster, toast } from "react-hot-toast";


const Login = () => {
	const {googleLogin, githubLogin, signIn } = useContext(AuthContext)

	// const [error, setError] = useState('')


	const handleLogin = e => {
		e.preventDefault();
		const form = new FormData(e.currentTarget)
		const email = form.get("email")
		const password= form.get("password")
		console.log(email, password);

		signIn(email, password)
		.then(result  => {
			console.log(result.user);
			toast.success("Login successful")
		})
		.catch(error => {
			console.error(error.message)
		})
	}

	return (
		<>
		<Navbar_2></Navbar_2>
			<div className="hero min-h-screen bg-base-200">
				<div className="hero-content flex-col ">
					<div className="text-center ">
						<h1 className="text-5xl font-bold">Login </h1>

					</div>
					<div className="card flex-shrink-0 w-[400px] shadow-2xl bg-base-100">
						<form onSubmit={handleLogin} className="card-body">
							<div className="form-control">
								<input type="text" name="email" placeholder="Username or Email" className="input input-bordered" required />
							</div>
							<div className="form-control">
								<input type="password" name="password" placeholder="Password" className="input input-bordered" required />
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
							<div className="form-control mt-6">
								<input className="btn btn-primary" type="submit" value="Login" />
							</div>
							<p>Dont have an account? <Link to={"/register"} className="text-[#F9A51A] underline">Create an account</Link></p>

							{/* log in with google and github */}
							<div className="flex items-center mx-auto">
								<span><hr className="w-40" /></span>
								OR
								<span><hr className="w-36" /></span>
							</div>

							<button onClick={googleLogin} className=" w-full border rounded-2xl py-2 flex items-center gap-2"><FcGoogle className="text-2xl ml-2" /> <span className=" mx-auto">Continue with Google</span></button>
							<button onClick={githubLogin} className=" w-full border rounded-2xl py-2 flex items-center gap-2"><BsGithub className="text-2xl ml-2" /> <span className=" mx-auto">Continue with Github</span></button>
						</form>
						<Toaster/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Login;