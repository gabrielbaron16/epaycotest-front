import React, { useState } from 'react';
import { Form, FormGroup, FormLabel, FormControl, Button} from 'react-bootstrap';
import { rechargeWalletRequest } from '../services/rechargeWalletRequest'
import { useAlert } from 'react-alert'

const RechargeWallet = () => {

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
        rechargeWalletRequest(object).then(response => {
            console.log(response.data);
            setForm();
            setSubmitted(false);
            console.log(response.data.data.balance);
            alert.success(response.data.message + ", su saldo es de " + response.data.data.balance);   
        }).catch(error =>{ 
            console.log(error.response);
            setSubmitted(false);
            alert.error("Error al Recargar la Cartera");
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
                    Recargar
                </Button>
            </Form>    
        </div>
    );
}
export default RechargeWallet;    