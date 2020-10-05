import React, {Component} from 'react'
import UserList from '../components/UserList'
import UserDetail from '../components/UserDetail'
import "./main.css"

class Main extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: null,
            selectedAccountId: null
        }

        this.handleSelectedAccId = this.handleSelectedAccId.bind(this)
        this.handleRatingUpdate = this.handleRatingUpdate.bind(this)
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("COMPONENTDIDUPDATE TRIGGER")
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
        fetch("http://localhost:8080/")
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

    handleSelectedAccId(newAccountId) {
        this.setState( prevState => {
            return {
                ...prevState,
                selectedAccountId: newAccountId
            }
        }, () => {
            console.log(this.state.selectedAccountId)
        })
    }

    handleRatingUpdate(updatedDataState) {
        fetch("http://localhost:8080/update", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                newData: this.state.data
            })
        })

        this.setState(prevState => {
            return {
                ...prevState,
                data: updatedDataState
            }
        }, () => {
            console.log(this.state.data)
        })
    }

    render() {
        return (
            <>
                <h1 className="main-header">Select a user from below to view their details</h1>
                <UserList 
                    accountsData={this.state.data} 
                    handleSelectedAccId={this.handleSelectedAccId} />
                <UserDetail 
                    accountsData={this.state.data}
                    selectedAccountId={this.state.selectedAccountId}
                    handleRatingUpdate={this.handleRatingUpdate} />
            </>
        )
    }

}

export default Main