import React, { useState } from 'react';
import { Form, FormGroup, FormLabel, FormControl, Button} from 'react-bootstrap';
import { getBalanceRequest } from '../services/getBalanceRequest'
import { useAlert } from 'react-alert'

const GetBalance = () => {

    const alert = useAlert();
    const [document, setDocument] = useState("");
    const [phone, setPhone] = useState("");
    const [submitted, setSubmitted] = useState(false);

   const setForm = () => {
    setDocument("");
    setPhone("")
   }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const object = {
            document : document,
            phone : phone
        }
        setSubmitted(true);
        getBalanceRequest(object).then(response => {
            console.log(response.data);
            setForm();
            setSubmitted(false);
            console.log(response.data.data.balance);
            alert.success("Su balance es de " + response.data.data.balance);   
        }).catch(error =>{ 
            console.log(error.response);
            setSubmitted(false);
            alert.error("Error al Obtener el Balance");
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
                <Button variant="primary" type="submit"
                    disabled={submitted} onClick={handleSubmit}>
                    Consultar
                </Button>
            </Form>    
        </div>
    );
}
export default GetBalance;    