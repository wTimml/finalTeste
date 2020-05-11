import React from 'react'
import './FaceRecognition.css'

const FaceRecognition = ({ imageUrl, box }) => {
	return(

		<div className='center'>

			<img style={{ width: '500px', height: 'auto', paddingTop: '20px' }} id='inputImage' alt='' src={imageUrl} />

			<div className='bouding-box'
				style={{
					top: box.topRow,
					right: box.rightCol,
					bottom: box.bottomRow,
					left: box.leftCol
				}}>
			</div>
		</div>
	)
}

export default FaceRecognition