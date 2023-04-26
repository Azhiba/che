import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { UpdateTask } from '../redux/TodoSlice';



function EditTask({id}) {
    const [show, setShow] = useState(false);
 const dispatch= useDispatch()
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
const [edited, setEdited] = useState(
    {
        title:"",
       description: "",
    }
)
  return (
    <div> <Button variant="primary" onClick={handleShow}>
    Edit task
  </Button>

  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Modal heading</Modal.Title>
    </Modal.Header>
    <Modal.Body className='inps'>
        <input type='text' placeholder='enter task title'  
     onChange={(e)=>
         setEdited({...edited,title:e.target.value})
          }
         />
      <input type='text' placeholder='enter task title'
       onChange={(e)=> 
        setEdited({...edited,description:e.target.value})
       
         }
        />


    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="primary" onClick={()=>{
   
    dispatch(UpdateTask({id:id, edited}));
    handleClose();
      }}
      
       >
        Save Changes
      </Button>
    </Modal.Footer>
  </Modal>
    </div>
  )
}

export default EditTask
