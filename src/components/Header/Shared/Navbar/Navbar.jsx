import { Link, NavLink, Navigate, useNavigate } from 'react-router-dom';
import logo from '../../../../assets/Frame.png'
import Search from './Search';
import { useContext } from 'react';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';

const Navbar = () => {
	const {user, logOut} = useContext(AuthContext)
	console.log(9, user);
	const navigate = useNavigate()

	const handleSignOut = () => {
		logOut()
		.then(result => {
			console.log(result.user);
			Navigate("/")
		})
		.catch(err => {
			console.log(err.message);
		})
	}

	const navLinks = <div className='flex gap-12 items-center font-medium text-white'>
		<NavLink
			to="/"
			className={({ isActive, isPending }) =>
				isPending ? "pending" : isActive ? "text-green-400 underline" : ""
			}
		>
			News
		</NavLink>
		<NavLink
			to="/destination"
			className={({ isActive, isPending }) =>
				isPending ? "pending" : isActive ? "text-green-400 underline" : ""
			}
		>
			Destination
		</NavLink>
		<NavLink
			to="/blog"
			className={({ isActive, isPending }) =>
				isPending ? "pending" : isActive ? "text-green-400 underline" : ""
			}
		>
			Blog
		</NavLink>
		<NavLink
			to="/contact"
			className={({ isActive, isPending }) =>
				isPending ? "pending" : isActive ? "text-green-400 underline" : ""
			}
		>
			Contact
		</NavLink>
		
		{
			user ? 
			<button onClick={handleSignOut} className='py-3 px-7 w-full text-black font-medium rounded-lg bg-[#F9A51A]'>{user?.displayName}</button>
		
		:
		<Link to={"/login"}>
			<button className='py-3 px-7 text-black font-medium rounded-lg bg-[#F9A51A]'>Login</button>
		</Link>
		
		}
	</div>

	return (
		<div className="navbar ">
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex={0} className="btn btn-ghost lg:hidden">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
					</label>
					<ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
						{navLinks}
					</ul>
				</div>
				<a className="normal-case text-xl"><img src={logo} alt="" /></a>
			</div>
			<div className="navbar-center mr-24">
				<Search></Search>
			</div>
			<div className="navbar-end hidden lg:flex">
				<ul className="menu menu-horizontal px-1">
					{navLinks}
					
				</ul>
			</div>
		</div>
	);
};

export default Navbar;