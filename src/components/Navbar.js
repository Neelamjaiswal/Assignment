import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";

const Navbar = () => {
return (
	<>
	<Nav>
		<NavMenu>
		<NavLink to="/" activeStyle>
		About me
		</NavLink>
		
		<NavLink to="/skills" activeStyle>
		My Skills
		</NavLink>
    <NavLink to="/experience" activeStyle>
	My Experience
		</NavLink>
		
    <NavLink to="/recommendations" activeStyle>
	Recommendation
		</NavLink>
		<NavLink to="/contact" activeStyle>
		Contact
		</NavLink>
    
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
