import React from 'react'
import UserDetail from './UserDetail'

const UserList = ({accountsData, handleSelectedAccId}) => {

    let userIds = []
    let userDetails = []

    if (accountsData !== null) {

        userIds = Object.keys(accountsData.users)
        userDetails = Object.values(accountsData.users).map((user, index) => {
            return <option key={index} value={user.account}>{user.name}</option>
        })

    }

    function changeEvent(event) {
        handleSelectedAccId(event.target.value)
    }

    return (
        <>
            <select id="user-dropdown" defaultValue="default" onChange={changeEvent}>
                <option disabled value="default">Choose a user...</option>
                {userDetails}
            </select>
        </>
    )

}

export default UserList