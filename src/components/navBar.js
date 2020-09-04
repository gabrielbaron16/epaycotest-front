import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import {NavLink}  from 'react-router-dom';
const NavComponent = () => {
    return (
        <Navbar bg="primary" variant="dark">
            <Nav className="mr-auto">
                <NavLink to="/client" className="nav-link">Crear Cliente</NavLink>
                <NavLink to="/wallet" className="nav-link">Recargar Cartera</NavLink>
                <NavLink to="/balance" className="nav-link">Consultar Balance</NavLink>
                <NavLink to="/transaction" className="nav-link">Crear Transacción</NavLink>
                <NavLink to="/confirm" className="nav-link">Confirmar Transacción</NavLink>
            </Nav>
        </Navbar>
    )
};
export default NavComponent;