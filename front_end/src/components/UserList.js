import React from 'react'
import UserDetail from './UserDetail'

const UserList = ({accountsData}) => {

    let userIds = []
    let userDetails = []

    if (accountsData !== null) {

        userIds = Object.keys(accountsData.users)
        userDetails = Object.values(accountsData.users).map((user, index) => {
            return <UserDetail 
                        key={index} 
                        userName={user.name} 
                        userAccount={user.account}
                        accountsData={accountsData} 
                    />
        })

    }

    changeEvent = () => {
        
    }

    return (
        <>
            <select onChange={changeEvent}>
                {userDetails}
            </select>
        </>
    )

}

export default UserList