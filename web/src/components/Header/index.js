import React from 'react'
import { Link } from 'react-router-dom'

import {
	Nav,
	Navbar,
	NavbarBrand,
	NavItem,
	NavLink,
	Collapse,
	NavbarToggler,
} from 'reactstrap'

const Header = () => {
	const [open, setOpen] = React.useState(false)

	return (
		<Navbar color="light" light expand="md">
			<div className="container">
				<NavbarBrand tag={Link} to="/">
					Minhas Séries
				</NavbarBrand>
				<NavbarToggler onClick={() => setOpen(!open)} />
				<Collapse isOpen={open} navbar>
					<Nav className="ml-auto" navbar>
						<NavItem>
							<NavLink tag={Link} to="/series">
								Séries
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink tag={Link} to="/generos">
								Genêros
							</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</div>
		</Navbar>
	)
}

export default Header
