<h1 align="center">Twimba</h1>

<div align="center">
  <h3>
    <a href="https://muhmmadawd.github.io/twimba/">
      Live Demo
    </a>
  </h3>
</div>

![screenshot](https://ncf-ec2-east-32-hv.xconvert.com/file/converter/download/UtRvg5hsb6P-z-0-y-641337a1b2caae1aad4cf6c8.gif)

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Overview](#overview)
- [Built With](#built-with)
- [Features](#features)
- [Contact](#contact)

<!-- OVERVIEW -->

## Overview

<!-- Introduce your projects by taking a screenshot or a gif. Try to tell visitors a
story about your project by answering: -->

<!-- - Where can I see your demo?
- What was your experience?
- What have you learned/improved?
- Your wisdom? :) -->

JavaScript app that handles the rendering and interaction with a Twitter-like
feed. It imports data from a separate data module, and also use the uuidv4 to
generate random Id

### Built With

<!-- This section should list any major frameworks that you built your project using. Here are a few examples.-->

- [css grid]()
- [js]()

## Features

<!-- List the features of your application or follow the template. Don't share the figma file here :) -->

- init(): This function initializes the web page by calling the
  renderFeedTweets() function and adding an event listener for clicks.

- renderFeedTweets(): This function renders the tweets on the web page by
  calling the getFeedTweets() function and setting the inner HTML of the .feed
  element.

- getFeedTweets(): This function generates the HTML for the tweets by iterating
  over the tweetsData array and calling the generateTweetHtml() function for
  each tweet.

- generateTweetHtml(tweet): This function generates the HTML for a single tweet
  using the information provided in the tweet parameter.

- generateRepliesHtml(tweet): This function generates the HTML for the replies
  to a tweet using the information provided in the tweet parameter.

- handleTweetDataSet(tweetTarget): This function handles updates to a tweet's
  data (such as likes, retweets, and replies) based on the data attributes of
  the clicked element.

- handleClick(e): This function handles clicks on the web page by determining
  the target of the click and calling the appropriate function.

- addTweet(tweetText): This function adds a new tweet to the beginning of the
  tweetsData array and then calls the renderFeedTweets() function to update the
  web page.

- tweetsData: This is an array of JavaScript objects that contain information
  about each tweet, such as the tweet text, profile picture, number of likes and
  retweets, and replies.

## Contact

<h5> If you have any questions or feedback, please feel free to contact me at
<a href="mailto:muhmmad.awd@gmail.com">muhmmad.awd@gmail.com</a>
</h5>
<div align="center">
  <h5>
    <a href="https://www.linkedin.com/in/muhmmadawd/">
      linkedin - muhmmadawd
    </a>
  </h5>
</div>
<div align="center">
  <h5>
    <a href="https://github.com/MuhmmadAwd/">
      GitHub - muhmmadawd
    </a>
  </h5>
</div>
