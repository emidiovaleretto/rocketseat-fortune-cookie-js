const cookie = document.querySelector("#cookie")
const playAgain = document.querySelector("#play-again")

const firstBox = document.querySelector(".box-1")
const secondBox = document.querySelector(".box-2")

const quotes = [
  "“The greatest glory in living lies not in never falling, but in rising every time we fall.” -Nelson Mandela",
  "“The way to get started is to quit talking and begin doing.” -Walt Disney",
  "“If life were predictable it would cease to be life, and be without flavor.” -Eleanor Roosevelt",
  "“If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.” -James Cameron",
  "“Life is what happens when you're busy making other plans.” -John Lennon",
  "“Spread love everywhere you go. Let no one ever come to you without leaving happier.” -Mother Teresa",
  "“When you reach the end of your rope, tie a knot in it and hang on.” -Franklin D. Roosevelt",
  "“Always remember that you are absolutely unique. Just like everyone else.” -Margaret Mead",
  "“Don't judge each day by the harvest you reap but by the seeds that you plant.” -Robert Louis Stevenson",
  "“The future belongs to those who believe in the beauty of their dreams.” -Eleanor Roosevelt",
]

cookie.addEventListener("click", cookieClick)
playAgain.addEventListener("click", playAgainClick)
document.addEventListener("keydown", handleEnterKey)

function cookieClick() {
  handleToogle()
  generateQuote()
}

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length)
  const quote = quotes[randomIndex]
  document.querySelector(".quote").innerText = quote
}

function playAgainClick(event) {
  event.preventDefault()
  handleToogle()
}

function handleToogle() {
  firstBox.classList.toggle("hidden")
  secondBox.classList.toggle("hidden")
}

function handleEnterKey(event) {
  if (event.key === "Enter" && firstBox.classList.contains("hidden")) {
    handleToogle()
  }
}
