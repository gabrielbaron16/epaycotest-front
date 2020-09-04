import React from 'react';
import { Form, FormGroup, FormLabel, FormControl, Button } from 'react-bootstrap';
export default () => (
    <div>
        <Form>
            <FormGroup controlId="token">
                <FormLabel>Token</FormLabel>
                <FormControl type="text" placeholder="Token" />
            </FormGroup>
            <FormGroup controlId="session_id">
                <FormLabel>id de Sesión</FormLabel>
                <FormControl type="text" placeholder="id de Sesión" />
            </FormGroup>
            <Button variant="primary" type="submit">
                Confirmar
            </Button>
        </Form>    
    </div>
);