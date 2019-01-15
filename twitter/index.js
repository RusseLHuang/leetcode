class User {
  constructor(userId) {
    this.userId = userId;
    this.following = {};
    this.tweets = [];
  }
}
/**
 * Initialize your data structure here.
 */
var Twitter = function () {
  this.user = {};
};

/**
 * Compose a new tweet. 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function (userId, tweetId) {
  if (typeof this.user[userId] == "undefined") {
    this.user[userId] = new User(userId);
  }

  const tweet = { id: tweetId, timestamp: new Date().getTime() };
  this.user[userId].tweets.push(tweet);
};

/**
 * Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent. 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function (userId) {
  if (typeof this.user[userId] == "undefined") {
    return [];
  }

  let followingTweets = [];
  const user = this.user[userId];
  const userTweets = user.tweets.length <= 10 ? user.tweets : user.tweets.slice(user.tweets.length - 10, user.tweets.length);
  Object.keys(user.following).forEach(k => {
    const u = user.following[k];
    const t = u.tweets.length <= 10 ? u.tweets : u.tweets.slice(u.tweets.length - 10, u.tweets.length);
    t.forEach(v => followingTweets.push(v));
  })
  const allTweets = [...userTweets, ...followingTweets].sort((a, b) => a.timestamp < b.timestamp).map(v => v.id);
  return allTweets.slice(0, 10);
};

/**
 * Follower follows a followee. If the operation is invalid, it should be a no-op. 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function (followerId, followeeId) {
  if (typeof this.user[followerId] == "undefined") {
    this.user[followerId] = new User(followerId);
  }
  if (typeof this.user[followeeId] == "undefined") {
    this.user[followeeId] = new User(followeeId);
  }

  // const followee = this.user[followeeId];
  // this.user[followerId].following.push(followee);
  const followee = this.user[followeeId];
  this.user[followerId].following[followeeId] = followee;
};

/**
 * Follower unfollows a followee. If the operation is invalid, it should be a no-op. 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function (followerId, followeeId) {
  if (typeof this.user[followerId] == "undefined") {
    this.user[followerId] = new User(followerId);
  }
  if (typeof this.user[followeeId] == "undefined") {
    this.user[followeeId] = new User(followeeId);
  }

  const followee = this.user[followeeId];
  this.user[followerId].following[followeeId] = null;
  delete this.user[followerId].following[followeeId];
};

/** 
 * Your Twitter object will be instantiated and called as such:
 * var obj = Object.create(Twitter).createNew()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */
["Twitter", "postTweet", "getNewsFeed", "follow", "postTweet", "getNewsFeed", "unfollow", "getNewsFeed"]
[[], [1, 5], [1], [1, 2], [2, 6], [1], [1, 2], [1]]