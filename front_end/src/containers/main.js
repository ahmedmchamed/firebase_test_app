import React, {Component} from 'react'
import UserList from '../components/UserList'
import UserDetail from '../components/UserDetail'

class Main extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: null,
            selectedAccountId: null
        }

        this.handleSelectedAccId = this.handleSelectedAccId.bind(this)
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

    handleSelectedAccId(value) {
        this.setState( prevState => {
            return {
                ...prevState,
                selectedAccountId: value
            }
        }, () => {
            console.log(this.state.selectedAccountId)
        })
    }

    render() {
        return (
            <>
                <h1>Select a user from below to view their details</h1>
                <UserList 
                    accountsData={this.state.data} 
                    handleSelectedAccId={this.handleSelectedAccId} />
                <UserDetail 
                    accountsData={this.state.data} 
                    selectedAccountId={this.state.selectedAccountId} />
            </>
        )
    }

}

export default Main