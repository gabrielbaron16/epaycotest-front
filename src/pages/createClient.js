import React, { useState } from 'react';
import { Form, FormGroup, FormLabel, FormControl, Button} from 'react-bootstrap';
import { createClientRequest } from '../services/createClientRequest'
import { useAlert } from 'react-alert'

const CreateClient = () => {

    const alert = useAlert();
    const [document, setDocument] = useState("");
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [submitted, setSubmitted] = useState(false);

   const setForm = () => {
    setDocument("");
    setName("");
    setLastName("");
    setEmail("")
    setPhone("")
   }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const client = {
            document : document,
            name : name,
            lastName : lastName,
            email : email,
            phone : phone
        }
        setSubmitted(true);
        createClientRequest(client).then(response => {
            console.log(response.data);
            setForm();
            setSubmitted(false);
            alert.success("El Cliente se Registró Correctamente");   
        }).catch(error =>{ 
            console.log(error.response);
            setSubmitted(false);
            alert.error("Error al Registrar Cliente");
        }) 
    };    
    return (
        <div>
            <Form>
                <FormGroup controlId="document">
                    <FormLabel>Documento de identificación</FormLabel>
                    <FormControl type="text"
                        required 
                        placeholder="Documento"
                        value={document}
                        onChange={(e) => setDocument(e.target.value)}
                    />
                </FormGroup>
                <FormGroup controlId="name">
                    <FormLabel>Nombre</FormLabel>
                    <FormControl type="text"
                        required 
                        placeholder="Nombre"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </FormGroup>
                <FormGroup controlId="lastName">
                    <FormLabel>Apellido</FormLabel>
                    <FormControl type="text"
                        required 
                        placeholder="Apellido"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </FormGroup>
                <FormGroup controlId="email">
                    <FormLabel>Email</FormLabel>
                    <FormControl type="email" 
                        required
                        placeholder="name@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />    
                </FormGroup>
                <FormGroup controlId="phone">
                    <FormLabel>Teléfono</FormLabel>
                    <FormControl type="text"
                        required
                        placeholder="Teléfono"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </FormGroup>
                <Button variant="primary" type="submit"
                    disabled={submitted} onClick={handleSubmit}>
                    Registrar
                </Button>
            </Form>    
        </div>
    );
}
export default CreateClient;    