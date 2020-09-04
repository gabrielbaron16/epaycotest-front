import React from 'react';
import { Form, FormGroup, FormLabel, FormControl, Button } from 'react-bootstrap';
export default () => (
    <div>
        <Form>
            <FormGroup controlId="document">
                <FormLabel>Documento de identificación</FormLabel>
                <FormControl type="text" placeholder="Documento" />
            </FormGroup>
            <FormGroup controlId="name">
                <FormLabel>Nombre</FormLabel>
                <FormControl type="text" placeholder="Nombre" />
            </FormGroup>
            <FormGroup controlId="lastName">
                <FormLabel>Apellido</FormLabel>
                <FormControl type="text" placeholder="Apellido"/>
            </FormGroup>
            <FormGroup controlId="phone">
                <FormLabel>Email</FormLabel>
                <FormControl type="email" placeholder="name@example.com" />
            </FormGroup>
            <FormGroup controlId="phone">
                <FormLabel>Teléfono</FormLabel>
                <FormControl type="text" placeholder="Teléfono" />
            </FormGroup>
            <Button variant="primary" type="submit">
                Registrar
            </Button>
        </Form>    
    </div>
);