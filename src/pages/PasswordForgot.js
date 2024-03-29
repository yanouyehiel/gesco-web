import React, { useState } from "react";
import { Form } from "react-bootstrap";
import ButtonComponent from "../components/Button";
import { ToastContainer, toast } from "react-toastify";

const PasswordForgot = () => {
    const [email, setEmail] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        toast('Un email vous a ete envoye')
        console.log(email)
    }

    return (
        <div style={style}>
            <ToastContainer />
            <div>
                <img 
                    src="../assets/images/logo_sans_bg.png"
                    alt="Image_Login" 
                    className="w-100" 
                    style={img}
                />
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="form-group mt-4">
                        <Form.Label className="control-label">Entrer votre adresse email</Form.Label>
                        <Form.Control 
                            className="form-control" 
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <ButtonComponent size='lg' type='submit' mt='18px'>Envoyer</ButtonComponent>
                </Form>
            </div>
        </div>
    )
}

export default PasswordForgot;

const style = {
    display: 'flex',
    justifyContent: 'center',
    //alignItems: 'center',
    maxWidth: '500px',
    border: '1px solid black' ,
    height: '500px',
    //backgroundColor: '#f2f2f2',
    borderRadius: '15px'
}

const img = {
    width: "100px",
    height: '200px'
}