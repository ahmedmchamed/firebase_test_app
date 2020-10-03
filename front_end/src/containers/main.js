import React, {Component} from 'react'
// import * as firebase from "firebase/app"

class Main extends Component {

    constructor(props) {
        super(props)
        // if (firebase.apps.length === 0) {
        //     firebase.initializeApp({});
        // }
        // firebase.initializeApp(FirebaseConfig)
        this.state = {
            data: {}
        }
    }

    componentDidMount() {
        fetch("http://localhost:8080/")
        .then(data => data.json())
        .then(res => this.setState(prevState => {
            return {
                ...prevState,
                data: res
            }
        }, () => {
            console.log(this.state.data)
        }))
    }

    render() {
        return (
            <h1>Hello from main</h1>
        )
    }

}

export default Main