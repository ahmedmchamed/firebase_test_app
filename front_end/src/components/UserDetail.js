import React from 'react'

const UserDetail = ({accountsData, selectedAccountId}) => {

    let filmTitle;
    if (accountsData !== null) {
        Object.keys(accountsData.accounts).some( accountId => {
            if (accountId === selectedAccountId) {
                const filmDetails = Object.values(accountsData.accounts[accountId].apps)
                for (const film of filmDetails) {
                    filmTitle = film.title
                    console.log(filmTitle)
                }             
            }
        })
    }

    return (
        <>
            {filmTitle}
        </>
    )

}

export default UserDetail;