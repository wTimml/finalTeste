import React from 'react'
import Particles from 'react-particles-js';

const Particless = () => {
    return (
        <Particles className='particle'
			params={{
				"particles": {
					"number": {
						"density": {
							"enable": true,
							"area": 600
						},
						"limit": 0,
						"value": 150
					},
					"size": {
						"value": 4
					}
				},
				"interactivity": {
					"events": {
						"onhover": {
							"enable": true,
							"mode": "repulse"
						}
					}
				}
			}}
        />
    );
}
    

export default Particless