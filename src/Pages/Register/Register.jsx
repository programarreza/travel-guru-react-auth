import { BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import Navbar_2 from "../../components/Header/Shared/Navbar/Navbar_2";

const Register = () => {

	
	return (
		<>
			<Navbar_2></Navbar_2>
			<div className="hero min-h-screen bg-base-200">
				<div className="hero-content flex-col ">
					<div className="text-center ">
						<h1 className="text-5xl font-bold">Create an account</h1>
					</div>
					<div className="card flex-shrink-0 w-[400px] shadow-2xl bg-base-100">
						<form className="card-body">
							<div className="form-control">
								<input type="text" placeholder="First Name" className="input input-bordered" required />
							</div>
							<div className="form-control">
								<input type="text" placeholder="Last Name" className="input input-bordered" required />
							</div>
							<div className="form-control">
								<input type="text" placeholder="Username or Email" className="input input-bordered" required />
							</div>
							<div className="form-control">
								<input type="password" placeholder="Password" className="input input-bordered" required />

							</div>
							<div className="form-control">
								<input type="password" placeholder="Conform Password" className="input input-bordered" required />
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
								<input className="btn btn-primary" type="submit" value="Register" />
							</div>
							<p>Already have an account? <Link to={"/login"} className="text-[#F9A51A] underline">Login</Link></p>

							{/* log in with google and github */}
							<div className="flex items-center mx-auto">
								<span><hr className="w-40" /></span>
								OR
								<span><hr className="w-36" /></span>
							</div>

							<button className=" w-full border rounded-2xl py-2 flex items-center gap-2"><FcGoogle className="text-2xl ml-2" /> <span className=" mx-auto">Continue with Google</span></button>
							<button className=" w-full border rounded-2xl py-2 flex items-center gap-2"><BsGithub className="text-2xl ml-2" /> <span className=" mx-auto">Continue with Github</span></button>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default Register;