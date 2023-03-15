import {
    tweetsData
} from './data.js'

import {
    v4 as uuidv4
} from 'https://jspm.dev/uuid';

function init() {
    renderFeedTweets()

    document.addEventListener("click", handleClick)
}

function renderFeedTweets() {
    document.querySelector(".feed").innerHTML = getFeedTweets();
}

function getFeedTweets() {
    let feedTweets = "";
    tweetsData.forEach((tweet) => {
        tweet.isRepliesClose

        const iconRedClass = tweet.isLiked ? "icon-red" : ""
        const iconGreenClass = tweet.isRetweeted ? "icon-green" : ""
        const replyOpenClass = tweet.isRepliesClose ? "" : "hidden"

        let replies = "";
        tweet.replies.forEach((reply) => {
            const replyEl = `
            <article class="feed__tweet ${replyOpenClass}">
                <img class="avatar feed__avatar" src="${reply.profilePic}" alt="feed_avatar">
                <div class="feed__info">
                <span class="feed__username">${reply.handle}</span>
                <p class="feed__body">${reply.tweetText}</p>
                </div>
            </article>`
            replies += replyEl
        })


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
            ${replies}
            </div>
        </article>
        `

        feedTweets += tweetEl
    })
    return feedTweets
}

function handleTweetDataSet(tweetTarget) {
    const tweetId = tweetTarget.dataset.id;
    const tweetIcon = tweetTarget.dataset.icon;
    const tweet = tweetsData.find((tweet) => tweet.uuid === tweetId);

    if (tweetIcon === "like") {
        tweet.isLiked ? tweet.likes -= 1 : tweet.likes += 1
        tweet.isLiked = !tweet.isLiked
    } else if (tweetIcon === "retweet") {
        tweet.isRetweeted ? tweet.retweets -= 1 : tweet.retweets += 1
        tweet.isRetweeted = !tweet.isRetweeted
    } else if (tweetIcon === "reply") {
        tweet.isRepliesClose = !tweet.isRepliesClose
    }
    renderFeedTweets();

}


function addTweet(tweetText) {
    if (tweetText) {
        tweetsData.unshift({
            handle: `@MuhmmadAwd`,
            profilePic: `../images/me.jpeg`,
            likes: 57,
            retweets: 3,
            tweetText: tweetText,
            replies: [],
            isLiked: false,
            isRetweeted: false,
            uuid: uuidv4()
        })
        renderFeedTweets()
    }

}

function handleClick(e) {
    const tweetTarget = e.target;
    let tweetText = tweetTarget.parentElement.querySelector(".tweet__text")
    if (tweetTarget.dataset.id) {
        handleTweetDataSet(tweetTarget)
    } else if (tweetTarget.dataset.btn) {
        addTweet(tweetText.value)
        tweetText.value = ""
    }

}
document.addEventListener("DOMContentLoaded", init)