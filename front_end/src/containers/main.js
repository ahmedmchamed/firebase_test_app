import React, {Component} from 'react'
import UserList from '../components/UserList'

class Main extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: null
        }
    }

    componentDidUpdate() {

    }

    componentDidMount() {
        const URL = "http://localhost:8080/"

        fetch(URL)
        .then(res => res.json())
        .then(data => this.setState(prevState => {
            return {
                ...prevState,
                data: data
            }
        }, () => {
            console.log(this.state.data)
        }))
    }

    render() {
        return (
            <UserList accountsData={this.state.data} />
        )
    }

}

export default Main