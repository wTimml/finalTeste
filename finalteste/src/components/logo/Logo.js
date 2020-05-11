import React from 'react'
import Tilt from 'react-tilt'
import './Logo.css'
import Eye from './Logo.png'

const Logo = () => {
	return (
		<div style={{display:'flex', justifyContent:'center'}}>
			<Tilt className="Tilt center " options={{ max: 55 }} style={{ height: 100, width: 100 }} >
				<div className="Tilt-inner"> <img style={{paddingTop:'10px', paddingLeft:'10px'}}src='https://image.flaticon.com/icons/svg/867/867923.svg'alt=''/> </div>
			</Tilt>
		</div>

		)
}

export default Logo