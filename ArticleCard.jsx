import React, { useState } from 'react';
import { Card, CardTitle, CardBody, Button, Modal } from 'reactstrap';
const ArticleCard = ({
  asset_id,
  section,
  byline,
  title,
  abstract,
  published_date
}) => {
  // States
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <Card style={{ width: '233px' }} className='m-auto '>
      
      <CardBody>
        <CardTitle className='card-title'>{title}</CardTitle>
        <Button onClick={toggle}>More info</Button>
      </CardBody>
      <Modal isOpen={modal} toggle={toggle}>
        <div className='modal-header d-flex justify-content-center'>
          <h5 className='modal-title text-center' id='exampleModalLabel'>
            {title}
          </h5>
          <button
            aria-label='Close'
            className='close'
            type='button'
            onClick={toggle}
          >
            <span aria-hidden={true}>X</span>
          </button>
        </div>
        <div className='modal-body'>
          <div className='d-flex justify-content-between ml-3'>
            <div>
            <p>ID: {asset_id}</p>
              <p>Title: {title}</p>
              <p>Section : {section}</p>
              <p>Authors : {byline}</p>
              <p>Published Date : {published_date}</p>
            </div>
          </div>
          <div className='mt-3'>{abstract}</div>
        </div>
      </Modal>
    </Card>
  );
};

export default ArticleCard;
