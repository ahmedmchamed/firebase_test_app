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

    function handleClick(event) {
        let key
        const keyToFind = Object.keys(accountsData.accounts[selectedAccountId].apps)
        for (const foundKey of keyToFind) {
            key = foundKey
        }
        accountsData.accounts[selectedAccountId].apps[key]["rating"] = event.target.value
        
        fetch("http://localhost:8080/update", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                newData: accountsData
            })
        })
    }

    return (
        <>
            {filmTitle}
            <button value="5" onClick={handleClick}>AHOY THERE</button>
        </>
    )

}

export default UserDetail;