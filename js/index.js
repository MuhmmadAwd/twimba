import {
    tweetsData
} from './data.js'

function init() {
    renderFeedTweets()

    document.addEventListener("click", handleClick)
}

function getFeedTweets() {
    let feedTweets = "";
    tweetsData.forEach((tweet) => {
        

        const tweetEl = `
        <article class="feed__tweet">
            <img class="avatar feed__avatar" src="${tweet.profilePic}" alt="feed_avatar">
            <div class="feed__info">
            <span class="feed__username">${tweet.handle}</span>
            <p class="feed__body">${tweet.tweetText}</p>
            <ul class="feed_icon-list">
                <li class="feed-icon"><i class="fa fa-commenting" data-id="${tweet.uuid}" data-icon="reply"></i> ${tweet.replies.length}</li>
                <li class="feed-icon"><i class="fa fa-heart " data-id="${tweet.uuid}" data-icon="like"></i> ${tweet.likes}</li>
                <li class="feed-icon"><i class="fa fa-retweet " data-id="${tweet.uuid}" data-icon="retweet"></i> ${tweet.retweets}</li>
            </ul>
            </div>
        </article>
        `
        feedTweets += tweetEl
    })
    return feedTweets
}

function renderFeedTweets() {
    document.querySelector(".feed").innerHTML = getFeedTweets();
}


document.addEventListener("DOMContentLoaded", init)