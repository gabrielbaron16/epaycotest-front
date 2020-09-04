import React, { useState } from 'react';
import { Form, FormGroup, FormLabel, FormControl, Button} from 'react-bootstrap';
import { createTransactionRequest } from '../services/createTransactionRequest'
import { useAlert } from 'react-alert'

const CreateTransaction = () => {

    const alert = useAlert();
    const [document, setDocument] = useState("");
    const [phone, setPhone] = useState("");
    const [value, setValue] = useState(1);
    const [submitted, setSubmitted] = useState(false);

   const setForm = () => {
    setDocument("");
    setPhone("")
    setValue(1);
   }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const object = {
            document : document,
            phone : phone,
            value : value
        }
        setSubmitted(true);
        createTransactionRequest(object).then(response => {
            console.log(response.data);
            setForm();
            setSubmitted(false);
            alert.success(response.data.message + ", y el id de sesión es " + response.data.data.session_id);   
        }).catch(error =>{ 
            console.log(error.response);
            setSubmitted(false);
            alert.error("Error al Registrar la Transacción");
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
                <FormGroup controlId="phone">
                    <FormLabel>Teléfono</FormLabel>
                    <FormControl type="text"
                        required
                        placeholder="Teléfono"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </FormGroup>
                <FormGroup controlId="value">
                    <FormLabel>Cifra</FormLabel>
                    <FormControl type="number"
                        required
                        placeholder="Cifra"
                        min="1"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
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
export default CreateTransaction;    