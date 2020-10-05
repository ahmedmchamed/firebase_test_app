import React from 'react'
import "./userdetail.css"

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
        ratingDescription = <p className="film-rate-query">You can rate <b>{filmTitle}</b> here:</p>;
        ratingSelection =   <select className="rating-dropdown" defaultValue="default" onChange={handleRating}>
                                <option disabled value="default">Choose a rating</option>
                                <option value="5">5 - Best thing ever 🙌 </option>
                                <option value="4">4 - Pretty good 👍 </option>
                                <option value="3">3 - Not bad 😬 </option>
                                <option value="2">2 - Hmm 🤔 </option>
                                <option value="1">1 - Nope 🤢 </option>
                            </select>
    }

    return (
        <>
            <div className="results-wrapper">
                <p className="film-title">{filmTitle}</p>
                {ratingDescription}
                {ratingSelection}
            </div>
        </>
    )

}

export default UserDetail;