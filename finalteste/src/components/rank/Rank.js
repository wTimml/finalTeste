import React from 'react'

const Rank = ({ name, entries }) => {

	return (
		<div>
			<div className='center' style= {{color:'white'}}>
				<h5>{name}, your current entry is: </h5>
			</div>
			<div className='center' style={{ color: 'white' }}>
				<h4>{entries} </h4>
			</div>
		</div>
		)
}

export default Rank;