import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import {BsPlusCircleFill,BsSlashCircleFill,BsPlusCircle} from 'react-icons/bs'

function Modaltodo() {

  let data = JSON.parse(localStorage.getItem('object')) || []
  let activId = Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);

  const [inputValues, setInputValues] = useState({
    idtextinput: '',
    idinputprio: '',
    idimputdate:'',
    idnamesite:'',
    // Ajoutez les noms des autres inputs et initialisez-les avec des valeurs vides
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(inputValues); 
    var newObj = {activId:activId, ActivName:inputValues.idtextinput, datetime:inputValues.idimputdate, nameSiteActivity:inputValues.idnamesite, priority:inputValues.idinputprio, status:'new'}
    data.push(newObj)
    localStorage.setItem('object', JSON.stringify(data));
    inputValues.idtextinput ='';
    inputValues.idimputdate='';
    inputValues.idnamesite='';
    inputValues.idinputprio='';
    
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <BsPlusCircle onClick={handleShow}  className='text-2xl cursor-pointer mr-3'/>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>New todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <div className='columns-2 m-auto'>
              <div>
               <Form.Label htmlFor="idtextinput"><nav>Name of todo</nav></Form.Label>
               <Form.Control
                type="text"
                id="idtextinput"
                name="idtextinput"
                aria-describedby="passwordHelpBlock"
                value={inputValues.idtextinput}
                onChange={handleInputChange}
                />

               <Form.Label htmlFor="idinputprio"><nav>priority</nav></Form.Label>
               <Form.Control
                type="text"
                id="idinputprio"
                name="idinputprio"
                aria-describedby="passwordHelpBlock"
                value={inputValues.idinputprio}
                onChange={handleInputChange}
                />
              </div>

              <div>
                <Form.Label htmlFor="idimputdate">date of todo</Form.Label>
                <Form.Control
                type="date"
                id="idimputdate"
                name="idimputdate"
                aria-describedby="passwordHelpBlock"
                value={inputValues.idimputdate}
                onChange={handleInputChange}
                />

                <Form.Label htmlFor="idnamesite">name of site</Form.Label>
                <Form.Control
                type="text"
                id="idnamesite"
                name="idnamesite"
                aria-describedby="passwordHelpBlock"
                value={inputValues.idnamesite}
                onChange={handleInputChange}
                />              
              </div>
            </div>
          <Form.Text id="passwordHelpBlock" muted>
          </Form.Text>
          <Modal.Footer>
          <BsPlusCircleFill type='submit' onClick={handleSubmit} className=" text-green-300 text-2xl hover:text-green-400 cursor-pointer" />
          <BsSlashCircleFill  className="text-2xl text-red-300 hover:text-red-400" onClick={handleClose}/>
        </Modal.Footer>
          </Form>
        </Modal.Body> 
      </Modal>
    </>
  );
}

export default Modaltodo;