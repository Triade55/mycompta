import React, { useState } from 'react';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';

export default function App() {
  const [topRightModal, setTopRightModal] = useState(false);

  const toggleOpen = () => setTopRightModal(!topRightModal);

  return (
    <>
      <MDBBtn onClick={toggleOpen}>Ajouter un compte </MDBBtn>

      <MDBModal
        animationDirection='right'
        open={topRightModal}
        tabIndex='-1'
        setOpen={setTopRightModal}
      >
        <MDBModalDialog position='top-right' side>
          <MDBModalContent>
            <MDBModalHeader className='bg-info text-white'>
              <MDBModalTitle>Product in the cart</MDBModalTitle>
              <MDBBtn
                color='none'
                className='btn-close btn-close-white'
                onClick={toggleOpen}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <div className='row'>
                <div className='col-3 text-center'>
                  <i className='fas fa-shopping-cart fa-4x text-info'></i>
                </div>

                <div className='col-9'>
                    <input type="text" name="addcompte" id="" className='form-control p-2 fs-3' placeholder='veiller entrer un nom '/>
                </div>
              </div>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='info' >Go to the cart</MDBBtn>
              <MDBBtn outline color='info' onClick={toggleOpen}>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}