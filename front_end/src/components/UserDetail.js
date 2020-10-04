import React from 'react'

const UserDetail = ({accountsData, selectedAccountId}) => {

    let account;
    let title;
    // if (accountsData !== null) {
    //     for (const accountId in accountsData.accounts) {
    //         if (accountId === selectedAccountId) {
    //             for (const value in accountsData.accounts[accountId]) {
    //                 account = Object.values(accountsData.accounts[accountId][value])
    //                 for (const app of account) {
    //                     title = app.title
    //                     console.log(title)
    //                 }
    //             }
    //         }
    //     }
    // }
    // for (const key of Object.keys(accountsData.accounts))
    if (accountsData !== null) {
        account = Object.keys(accountsData.accounts).some( accountId => {
            if (accountId === selectedAccountId) {
                console.log(accountsData.accounts[accountId])
            }
        })
        console.log(account)
    }
    

    return (
        <>
            {/* {title} */}
        </>
    )

}

export default UserDetail;