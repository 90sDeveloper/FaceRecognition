import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onButtonSubmit}) =>{
    return(
        <div className='ma4 mt0'>
            <p className='white fw6 f3'>
                {'This Magic Brain will detect FACES in your pictures..Give it a TRY!!'}
            </p>
            <p className='white fw2 f5'>
                {'Paste the URL of the image and Press Detect...'}
            </p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-5'>
                    <input className='f4 pa2 w-70 center' type='tex' onChange={onInputChange}/>
                    <button className='f4 w-30 grow link ph3 pv2 dib white bg-dark-green' onClick={onButtonSubmit}>Detect</button>
                </div>
            </div>
        </div>
    )    
}
export default ImageLinkForm;