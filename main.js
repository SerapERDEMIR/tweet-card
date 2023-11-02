//console.log('bağlantı')

const tweets = [];
let twetCont;

const editableInput = document.querySelector(".editable");
//console.log(editableInput)

const placeholder = document.querySelector(".placeholder");
//console.log(placeholder)

const counter = document.querySelector(".counter");
//console.log(counter)

const tweetButton = document.querySelector(".button");
//console.log(tweetButton)

const readonly = document.querySelector(".readonly");
//console.log(readonly)

const tweetContainer = document.querySelector(".tweet-container");
//console.log(tweetContainer)

const tweetsContainer = document.querySelector(".tweets-container");
//console.log('dede', tweetsContainer)
editableInput.addEventListener("click", () => {
  placeholder.style.color = "#c5ccd3";
});

editableInput.onblur = () => {
  placeholder.style.color = "#98a5b1";
};

editableInput.onkeypress = (e) => {
  placeholder.style.display = "none";
  // console.log(e.target.innerText)
  const inputContent = e.target.innerText;
  // console.log(inputContent)
  inputValidate(inputContent);
};

editableInput.onkeyup = (e) => {
  placeholder.style.display = "none";
  const inputContent = e.target.innerText;
  //console.log(inputContent)
  inputValidate(inputContent);
};

const inputValidate = (tweet) => {
  twetCont = tweet;
  //console.log('fonksiyon çalıştı')
  const tweetLimit = 5;
  //console.log(tweetLimit)
  const tweetLength = tweet.length;
  //  console.log(tweetLength)
  const currentLimit = tweetLimit - tweetLength;
  //console.log(currentLimit)

  let newTweet;

  //Tweetin olup olmama durumu kontrolu
  if (tweetLength <= 0) {
    // console.log('tweet sıfırdan küçük')
    placeholder.style.display = "block";
    // console.log('placeholder gitti')
    counter.style.display = "none";
    // console.log('counter gitti')
    tweetButton.classList.remove("active");
  } else {
    // console.log('else')
    counter.style.display = "block";
    tweetButton.classList.add("active");
  }
  counter.innerText = currentLimit;

  if (tweetLength > tweetLimit) {
    let overTweet = tweet.substr(tweetLimit, tweetLength);
    //console.log(overTweet)
    let overTweetElement = `<span class='overText'>${overTweet}</span>`;
    newTweet = tweet.substr(0, tweetLimit) + overTweetElement;

    readonly.style.zIndex = "1";
    counter.style.color = "red";
    tweetButton.classList.remove("active");
  } else {
    counter.style.color = "#333";
  }

  readonly.innerHTML = newTweet;
};

tweetButton.addEventListener("click", () => {
    tweetsContainer.innerHTML=''
    tweets.push(twetCont);
  console.log(twetCont)
    tweets.map((tweet) => {
      const tweetCard = document.createElement("div");
      tweetCard.innerHTML = `
              <div class="tweet-container">
                <img
                  id="profilePhoto"
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80"
                  alt=""
                />
          
                <p class="tweet">${tweet}</p>
                <h3 class="userName">Hasan</h3>
              </div>`;
  
      tweetsContainer.appendChild(tweetCard);
    });
  });
  