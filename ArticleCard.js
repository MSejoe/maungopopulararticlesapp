import React, { useState } from 'react';
import { Button, Modal } from 'reactstrap';
import {FaExternalLinkAlt} from 'react-icons/fa';
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
    <div className="grid grid-cols-1 gap-10 px-5 sm:grid-cols-2">
      
      
        
      <Button onClick={()=> setModal(true)}><FaExternalLinkAlt/></Button>
      
      <Modal isOpen={modal} >
        
          <button
            aria-label='Close'
            className='close'
            type='button'
            onClick={toggle}
          >
            <span aria-hidden={true}>X</span>
          </button>
        
        
            
              <p>Title: {title}</p>
              <p>Section : {section}</p>
              <p>Authors : {byline}</p>
              <p>Published Date : {published_date}</p>
              <p>{abstract}</p>
            
          
        
      </Modal>
    </div>
  );
};

export default ArticleCard;
