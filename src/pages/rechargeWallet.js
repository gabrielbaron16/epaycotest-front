import React from 'react';
import { Form, FormGroup, FormLabel, FormControl, Button } from 'react-bootstrap';
export default () => (
    <div>
        <Form>
            <FormGroup controlId="document">
                <FormLabel>Documento de identificación</FormLabel>
                <FormControl type="text" placeholder="Documento" />
            </FormGroup>
            <FormGroup controlId="phone">
                <FormLabel>Teléfono</FormLabel>
                <FormControl type="text" placeholder="Teléfono" />
            </FormGroup>
            <FormGroup controlId="value">
                <FormLabel>Cifra</FormLabel>
                <FormControl type="number" min="1" placeholder="Cifra" />
            </FormGroup>
            <Button variant="primary" type="submit">
                Recargar
            </Button>
        </Form>    
    </div>
);