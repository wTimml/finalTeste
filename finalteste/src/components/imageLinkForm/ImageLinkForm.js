import React from 'react'
import './ImageLinkForm.css'

const ImageLinkForm = ({onInputChange , onButtonSubmit }) => {
	return (
		<div className="container" >
			<h3 className="center">
				Reconhecimento De Faces
			</h3>
			<div className='form  center z-depth-2' style={{ height:"110px" }}>
				<input style={{ width: '600px' }} className='center' type='text' onChange={onInputChange}/>
				<div style={{ paddingTop: '10px' }}>
					<a style={{ borderRadius: '10px' }} className="waves-effect waves-light btn	 light-blue darken-4" onClick={onButtonSubmit}>Detectar</a>
				</div>
			</div>
		</div>
	)
}

export default ImageLinkForm