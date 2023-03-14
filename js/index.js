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
        const iconRedClass = tweet.isLiked ? "icon-red" : ""
        const iconGreenClass = tweet.isRetweeted ? "icon-green" : ""

        const tweetEl = `
        <article class="feed__tweet">
            <img class="avatar feed__avatar" src="${tweet.profilePic}" alt="feed_avatar">
            <div class="feed__info">
            <span class="feed__username">${tweet.handle}</span>
            <p class="feed__body">${tweet.tweetText}</p>
            <ul class="feed_icon-list">
                <li class="feed-icon"><i class="fa fa-commenting" data-id="${tweet.uuid}" data-icon="reply"></i> ${tweet.replies.length}</li>
                <li class="feed-icon"><i class="fa fa-heart ${iconRedClass}" data-id="${tweet.uuid}" data-icon="like"></i> ${tweet.likes}</li>
                <li class="feed-icon"><i class="fa fa-retweet ${iconGreenClass}" data-id="${tweet.uuid}" data-icon="retweet"></i> ${tweet.retweets}</li>
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

function handleTweetsData(tweetTarget) {
    const tweetId = tweetTarget.dataset.id;
    const tweetIcon = tweetTarget.dataset.icon;
    tweetsData.forEach((tweet) => {
        if (tweet.uuid == tweetId) {
            if (tweetIcon == "like") {
                tweet.isLiked ? tweet.likes -= 1 : tweet.likes += 1
                tweet.isLiked = !tweet.isLiked
            } else if (tweetIcon == "retweet") {
                tweet.isRetweeted ? tweet.retweets -= 1 : tweet.retweets += 1
                tweet.isRetweeted = !tweet.isRetweeted
            }
        }
        renderFeedTweets()
    })
}

function handleClick(e) {
    const tweetTarget = e.target;
    if (tweetTarget.dataset.id) {
        handleTweetsData(tweetTarget)
    }

}
document.addEventListener("DOMContentLoaded", init)