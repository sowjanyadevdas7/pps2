/*

Social Share Links:

Whatsapp:

https://api.whatsapp.com/send?text=[post-title] [post-url]

Facebook:

https://www.facebook.com/sharer.php?u=[post-url]

Twitter:

https://twitter.com/share?url=[post-url]&text=[post-title]&via=[via]&hashtags=[hashtags]

Pinterest:

https://pinterest.com/pin/create/bookmarklet/?media=[post-img]&url=[post-url]&is_video=[is_video]&description=[post-title]

LinkdIn:

https://www.linkedin.com/shareArticle?url=[post-url]&title=[post-title]

Email:

$email = 'mailto:?subject=' . $[post-title] . '&body=Check out this site: '. $[post-url] .'" title="Share by Email';

*/

const facebookbtn = document.querySelector(".facebook-btn");
const whatsappbtn = document.querySelector(".whatsapp-btn");
const mailbtn = document.querySelector(".email-btn");
const instagrambtn = document.querySelector(".instagram-btn");
const linkdinbtn = document.querySelector(".linkdin-btn");
const pinterestbtn = document.querySelector(".pinterest-btn");
const twitterbtn = document.querySelector(".twitter-btn");

function init() {
        const cardimgtop = document.querySelector("card-img-top");
    
    let postUrl = encodeURI(document.location.href);
    let postTitle = encodeURI("Hi everyone, please check this out: ");
    let postImg = encodeURI(cardimgtop.src);

    facebookbtn.setAttribute(
        "href",
        `https://www.facebook.com/sharer.php?u=${postUrl}`
    );
    whatsappbtn.setAttribute(
        "href",
        `https://api.whatsapp.com/send?text=${postTitle} ${postUrl}`
    );
    mailbtn.setAttribute(
        "href",
        `$email = 'mailto:?subject=' . ${postTitle} . '&body=Check out this site: '. ${postUrl} .'" title="Share by Email'`
    );
    instagrambtn.setAttribute(
        "href",
        `https://www.facebook.com/sharer.php?u=${postUrl}`
    );
    linkdinbtn.setAttribute(
        "href",
        `https://www.linkedin.com/shareArticle?url=${postUrl}&title=${postTitle}`
    );
    pinterestbtn.setAttribute(
        "href",
        `https://pinterest.com/pin/create/bookmarklet/?media=${postImg}&url=${postUrl}&description=${postTitle}`
    );
    twitterbtn.setAttribute(
        "href",
        `https://twitter.com/share?url=${postUrl}&text=${postTitle}`
    );
}

init();