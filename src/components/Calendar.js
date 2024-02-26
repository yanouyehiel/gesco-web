import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import { deleteCalendar, updateCalendar } from '../services/MainControllerApi';
import { toast } from 'react-toastify';
import ButtonComponent from './Button';

const style = {
    width: '30px',
    height: '30px',
    marginRight: '5px',
    paddingLeft: '-10px'
}

const styleP = {...style, backgroundColor: '#009AD7'}

const Calendar = ({calendar, num}) => {
    const [show, setShow] = useState(false)
    const [cal, setCal] = useState({})

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setCal(calendar)
        setShow(true);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(cal)
        updateCalendar(cal).then((res) => {
            setShow(false)
            toast(res)
            setTimeout(() => {
                window.location.reload()
            }, 2000)
        }, (err) => {
            toast.error(err.message)
        })
    }

    function handleDelete() {
        deleteCalendar(calendar.id).then((res) => {
            toast(res)
            setTimeout(() => {
                window.location.reload()
            }, 2000)
        }, (err) => {
            toast.error(err.message)
        })
    }

    const handleChange = ({currentTarget}) => {
        const {name, value} = currentTarget;
        setCal({...cal, [name]: value})
    }

    return(
        <>
            <tr>
                <td style={{textAlign: 'center'}}>{num+1}</td>
                <td style={{textAlign: 'center'}}>{calendar.titre}</td>
                <td style={{textAlign: 'center'}}>{calendar.date}</td>
                <td style={{textAlign: 'center'}}>
                    <Button style={styleP} onClick={() => handleShow()}>
                        <i className="fa-solid fa-pen-to-square"></i>
                    </Button>
                    <Button style={style} variant='danger' onClick={() => handleDelete()}>
                        <i className='fa-solid fa-trash'></i>
                    </Button>
                </td>
            </tr>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modifier le calendrier</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>Titre</Form.Label>
                            <Form.Control value={cal.titre} name='titre' onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mt-3">
                            <Form.Label>Date</Form.Label>
                            <Form.Control value={cal.date} name='date' onChange={handleChange} />
                        </Form.Group>
                        <ButtonComponent type='submit' className="mt-3">Modifier</ButtonComponent>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Calendar;