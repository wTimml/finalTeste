import React, { Component } from 'react';
import './App.css';
import Navigation from './components/navigation/Navigation'
import Logo from './components/logo/Logo'
import ImageLinkForm from './components/imageLinkForm/ImageLinkForm'
import FaceRecognition from './components/faceRecognition/FaceRecognition'
import Signin from './components/signin/Signin'
import Register from './components/register/Register'
import Rank from './components/rank/Rank'
import Particles from './components/particles/Particles';
import Clarifai from 'clarifai'
import LandingPage from './components/landingPage';


import { BrowserRouter, Switch, Route } from 'react-router-dom'
import cardssss from './components/cardssss';

const app = new Clarifai.App({
    apiKey: 'cd693e2a14da4037b48856f8b2df6f92'
});

class App extends Component {

    constructor() {
        super();
        this.state = {
            input: '',
            imageUrl: '',
            box: {},
            route: 'signin',
            isSignedIn: false, 
            user: {
                id: '',
                name: '',
                email: '',
                entries: '0',
                joined: '',
            }
        }
    }

    loadUser = (data) => {
        this.setState({
            user: {
                id: data.id,
                name: data.name,
                email: data.email,
                entries: data.entries,
                joined: data.joined,
            }
        })
    }

    calculateFaceLocation = (data) => {
        const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box
        const image = document.getElementById('inputImage')
        const width = Number(image.width);
        const height = Number(image.height);
        console.log(width)
        console.log(height)
        console.log(clarifaiFace.top_row)
        return {
            leftCol: clarifaiFace.left_col * width,
            topRow: clarifaiFace.top_row * height,
            rightCol: width - (clarifaiFace.right_col * width),
            bottomRow: height - (clarifaiFace.bottom_row * height)
        }
    }

    displayFaceBox = (box) => {
        console.log(box)
        this.setState({box: box})
    }

    onInputChange = (event) => {
        this.setState({ input: event.target.value })
    }

    onButtonSubmit = () => {
        this.setState({imageUrl:this.state.input})

        app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
            .then(response => {
                if (response) {
                    fetch('http://localhost:3000/image', {
                        method: 'put',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            id: '0'
                        })
                    })
                        .then(response => response.json())
                        .then(count => {
                            this.setState({
                                user: {
                                    entries: count
                                }})
                        })
                }
                this.displayFaceBox(this.calculateFaceLocation(response))
            })
            .catch(err => console.log(err))
    }

    onRouteChange = (route) => {
        if (route === 'signout') {
            this.setState({isSignedIn: false})
        } else if(route === 'home'){
            this.setState({isSignedIn:true})
        }
        this.setState({ route: route })

    }

    render() {
        return (
            <BrowserRouter>
            <div className="App">
                <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} />

                   

                    <switch>
                        <Route path='/landingPage' component={LandingPage}/>
                        <Route path='/:id' component={cardssss}/>
                    </switch>

                <Particles />

            </div>
            </BrowserRouter>
        );
    }
}

export default App;
