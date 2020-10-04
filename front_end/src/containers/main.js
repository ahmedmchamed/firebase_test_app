import React, {Component} from 'react'
import UserList from '../components/UserList'
import UserDetail from '../components/UserDetail'

class Main extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: null,
            selectedAccount: null
        }

        this.handleSelectedUser = this.handleSelectedUser.bind(this)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.data !== this.state.data) {
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

    handleSelectedUser(value) {
        this.setState( prevState => {
            return {
                ...prevState,
                selectedAccount: value
            }
        }, () => {
            console.log(this.state.selectedAccount)
        })
    }

    render() {
        return (
            <>
                <UserList 
                    accountsData={this.state.data} 
                    handleSelectedUser={this.handleSelectedUser} />
                <UserDetail 
                    accountsData={this.state.data} 
                    selectedAccount={this.state.selectedAccount} />
            </>
        )
    }

}

export default Main