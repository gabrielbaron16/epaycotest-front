import React, { useState } from 'react';
import { Form, FormGroup, FormLabel, FormControl, Button} from 'react-bootstrap';
import { confirmTransactionRequest } from '../services/confirmTransactionRequest'
import { useAlert } from 'react-alert'

const ConfirmTransaction = () => {

    const alert = useAlert();
    const [session_id, setSession_id] = useState("");
    const [token, setToken] = useState("");
    const [submitted, setSubmitted] = useState(false);

   const setForm = () => {
    setSession_id("");
    setToken("")
   }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const object = {
            session_id : session_id,
            token : token
        }
        setSubmitted(true);
        confirmTransactionRequest(object).then(response => {
            console.log(response.data);
            setForm();
            setSubmitted(false);
            console.log(response.data.data.balance);
            alert.success("Se confirmó la Transacción");   
        }).catch(error =>{ 
            console.log(error.response);
            setSubmitted(false);
            alert.error("Error al Confirmar la Transacción");
        }) 
    };    
    return (
        <div>
            <Form>
                <FormGroup controlId="session_id">
                    <FormLabel>id de Sesión</FormLabel>
                    <FormControl type="text"
                        required 
                        placeholder="id de sesion"
                        value={session_id}
                        onChange={(e) => setSession_id(e.target.value)}
                    />
                </FormGroup>
                <FormGroup controlId="token">
                    <FormLabel>Token</FormLabel>
                    <FormControl type="text"
                        required
                        placeholder="Token"
                        value={token}
                        onChange={(e) => setToken(e.target.value)}
                    />
                </FormGroup>
                <Button variant="primary" type="submit"
                    disabled={submitted} onClick={handleSubmit}>
                    Confirmar
                </Button>
            </Form>    
        </div>
    );
}
export default ConfirmTransaction;    