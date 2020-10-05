import React from 'react'

const UserDetail = ({accountsData, selectedAccountId, handleRatingUpdate}) => {

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

    function handleRating(event) {
        let key
        const keyToFind = Object.keys(accountsData.accounts[selectedAccountId].apps)
        for (const foundKey of keyToFind) {
            key = foundKey
        }
        accountsData.accounts[selectedAccountId].apps[key]["rating"] = event.target.value
        handleRatingUpdate(accountsData)
    }

    let ratingDescription
    let ratingSelection
    if (filmTitle) {
        ratingDescription = <p>Rate the film here:</p>;
        ratingSelection =   <select id="rating-dropdown" defaultValue="default" onChange={handleRating}>
                                <option disabled value="default">Choose a rating</option>
                                <option value="5">5 - Best thing ever 🙌</option>
                                <option value="4">4 - Pretty good 👍</option>
                                <option value="3">3 - Not bad 😬</option>
                                <option value="2">2 - Hmm 🤔</option>
                                <option value="1">1 - Nope 🤢</option>
                            </select>
    }

    const userRating = () => {
        if ('rating' in accountsData.accounts[selectedAccountId].apps) {
            console.log("Hello")
        }
    }

    return (
        <>
            <p>{filmTitle}</p>
            {ratingDescription}
            {ratingSelection}
            {userRating}
        </>
    )

}

export default UserDetail;