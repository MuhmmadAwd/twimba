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
    let feedTweetsHtml = "";

    tweetsData.forEach((tweet) => {
        feedTweetsHtml += generateTweetHtml(tweet)
    })
    return feedTweetsHtml
}

function generateTweetHtml(tweet) {

    const iconRedClass = tweet.isLiked ? "icon-red" : "";
    const iconGreenClass = tweet.isRetweeted ? "icon-green" : "";

    let repliesHtml = generateRepliesHtml(tweet)

    const tweetHtml = `
        <article class="feed__tweet">
            <img class="avatar feed__avatar" src="${tweet.profilePic}" alt="feed_avatar">
            <div class="feed__info">
            <span class="feed__username">${tweet.handle}</span>
            <p class="feed__body">${tweet.tweetText}</p>
            <ul class="feed_icon-list">
                <li class="feed-icon"><i class="fa fa-commenting" data-id="${tweet.uuid}" data-icon="reply"></i> ${tweet.replies.length}</li>
                <li class="feed-icon"><i class="fa fa-heart ${iconRedClass}" data-id="${tweet.uuid}" data-icon="like"></i> ${tweet.likes}</li>
                <li class="feed-icon"><i class="fa fa-retweet ${iconGreenClass}" data-id="${tweet.uuid}" data-icon="retweet"></i> ${tweet.retweets}</li>
                <li class="feed-icon"><i class="fa fa-trash" data-id="${tweet.uuid}" data-icon="remove"></i></li>
            </ul>
            ${repliesHtml}
            </div>
        </article>
        `
    return tweetHtml;
}

function generateRepliesHtml(tweet) {
    const replyOpenClass = tweet.isRepliesClose ? "" : "hidden";
    let repliesHtml = "";

    tweet.replies.forEach((reply) => {
        const replyHtml = `
            <article class="feed__tweet ${replyOpenClass}">
                <img class="avatar feed__avatar" src="${reply.profilePic}" alt="feed_avatar">
                <div class="feed__info">
                <span class="feed__username">${reply.handle}</span>
                <p class="feed__body">${reply.tweetText}</p>
                </div>
            </article>
        `;
        repliesHtml += replyHtml;
    });
    repliesHtml += `
            <section class="tweet ${replyOpenClass}">
            <img class="avatar tweet__img" src="./images/me.jpeg" alt="tweet__img">
            <textarea class="tweet__text" placeholder="What's happening" name="tweet-text" id="" cols="30"
                rows="3"></textarea>
            <button class="btn tweet__btn comment-btn" data-id="${tweet.uuid}">Add Comment</button>
            </section>
            `
    return repliesHtml;
}

function handleTweetDataSet(tweetTarget) {
    let tweetText = tweetTarget.parentElement.querySelector(".tweet__text")

    const tweetId = tweetTarget.dataset.id;
    const tweetIcon = tweetTarget.dataset.icon;
    let tweet = tweetsData.find((tweet) => tweet.uuid === tweetId);

    switch (tweetIcon) {
        case "like":
            tweet.isLiked ? tweet.likes -= 1 : tweet.likes += 1
            tweet.isLiked = !tweet.isLiked
            break;

        case "retweet":
            tweet.isRetweeted ? tweet.retweets -= 1 : tweet.retweets += 1
            tweet.isRetweeted = !tweet.isRetweeted
            break;

        case "reply":
            tweet.isRepliesClose = !tweet.isRepliesClose
            break;

        case "remove":
            const tweetIndex = tweetsData.findIndex((tweet) => tweet.uuid === tweetId);
            if (tweetIndex !== -1) {
                tweetsData.splice(tweetIndex, 1);
            }
            break;


        default:
            tweet.replies.push({
                handle: `@MohmmedAwd`,
                profilePic: `../images/me.jpeg`,
                tweetText: `${tweetText.value}`,
            })
            tweetText.value = ""
            break;
    }

    renderFeedTweets();

}

function handleClick(e) {
    const tweetTarget = e.target;
    let tweetText = tweetTarget.parentElement.querySelector(".tweet__text")
    if (tweetTarget.dataset.id) {
        handleTweetDataSet(tweetTarget)
    } else if (tweetTarget.dataset.btn) {
        addTweet(tweetText.value, tweetTarget)
        tweetText.value = ""
    }

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
    }
    renderFeedTweets()

}
document.addEventListener("DOMContentLoaded", init)