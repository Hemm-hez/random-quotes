const quotebox = [
  {
    quote:
      " 'The greatest glory in living lies not in never falling, but in rising every time we fall'",
    author: "Nelson Mandela",
  },
  {
    quote: "'Our lives begin to end the day we become silent about things that matter.'",
    author: "",
  },
  {
    quote: "'The battles that count aren't the ones for gold medals. The struggles within yourself--the invisible battles inside all of us--that's where it's at.'",
    author: "Jesse Owens",
  },
  {
    quote: "'Build your own dreams, or someone else will hire you to build theirs.'",
    author: "Farrah Gray",
  },
  {
    quote: "'If you want your children to turn out well, spend twice as much time with them, and half as much money.'",
    author: "Abigail Van Buren",
  },
  {
    quote: "'It is not what you do for your children, but what you have taught them to do for themselves, that will make them successful human beings.'",
    author: "Ann Landers",
  },
  {
    quote: "'I would rather die of passion than of boredom.'",
    author: "Vincent van Gogh",
  },
  {
    quote: "'There are no traffic jams along the extra mile.'",
    author: "Roger Staubach",
  },
  {
    quote: "'The person who says it cannot be done should not interrupt the person who is doing it.'",
    author: "Chinese Proverb",
  },
  {
    quote: "'A person who never made a mistake never tried anything new.'",
    author: "Albert Einstein",
  },
  {
    quote: "'What’s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do.'",
    author: "Bob Dylan",
  },
  {
    quote: "' You take your life in your own hands, and what happens? A terrible thing, no one to blame.'",
    author: "Erica Jong",
  },
  {
    quote: "' I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do. '",
    author: "Leonardo da Vinci",
  },
  {
    quote: "'First, have a definite, clear practical ideal; a goal, an objective. Second, have the necessary means to achieve your ends; wisdom, money, materials, and methods. Third, adjust all your means to that end.'",
    author: "Aristotle",
  },
  {
    quote: "'Life is not measured by the number of breaths we take, but by the moments that take our breath away.'",
    author: "Maya Angelou",
  },
  {
    quote: "' How wonderful it is that nobody need wait a single moment before starting to improve the world'",
    author: "Anne Frank",
  },
  {
    quote: "' Everything has beauty, but not everyone can see.'",
    author: "Confucius",
  },
  {
    quote: 'Teach thy tongue to say, "I do not know," and thous shalt progress. ',
    author: "Maimonides",
  },
  {
    quote: "'We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.'",
    author: "Plato",
  },
  {
    quote: "' Everything you’ve ever wanted is on the other side of fear.'",
    author: "George Addair",
  },
  {
    quote: "' Believe you can and you’re halfway there.'",
    author: "Theodore Roosevelt",
  },
  {
    quote: "'Certain things catch your eye, but pursue only those that capture the heart.'",
    author: "Ancient Indian Proverb",
  },
  {
    quote: "'Few things can help an individual more than to place responsibility on him, and to let him know that you trust him.'",
    author: "Booker T. Washington",
  },
  {
    quote: "' Go confidently in the direction of your dreams.  Live the life you have imagined. '",
    author: "Henry David Thoreau",
  },
  {
    quote: "'The only person you are destined to become is the person you decide to be.'",
    author: "Ralph Waldo Emerson",
  },
  {
    quote: "'Ask and it will be given to you; search, and you will find; knock and the door will be opened for you.'",
    author: "Matthew 7:7-8",
  },
  {
    quote: "' There is only one way to avoid criticism: do nothing, say nothing, and be nothing.'",
    author: "Aristotle",
  },
  {
    quote: "'If you hear a voice within you say “you cannot paint,” then by all means paint and that voice will be silenced.'",
    author: "Vincent Van Gogh",
  },
  {
    quote: "'People often say that motivation doesn’t last. Well, neither does bathing.  That’s why we recommend it daily.'",
    author: "Zig Ziglar",
  },
  {
    quote:
      "'I've missed more than 9000 shots in my career. I've lost almost 300 games. 26 times I've been trusted to take the game winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed.'",
    author: "Michael Jordan",
  },
  {
    quote: "' You miss 100% of the shots you don’t take.'",
    author: "Wayne Gretzky",
  },
  {
    quote: "'I attribute my success to this: I never gave or took any excuse.'",
    author: "Florence Nightingale",
  },
  {
    quote:
      "'Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.'",
    author: "Robert Frost",
  },
  {
    quote: "'Strive not to be a success, but rather to be of value'",
    author: "Albert Einstein",
  },
  {
    quote:
      "'Whatever the mind of man can conceive and believe, it can achieve.'",
    author: "Napoleon Hill",
  },
  {
    quote: "'Life is about making an impact, not making an income.'",
    author: "Kevin Kruse",
  },
];
// console.log(quotebox);

document.getElementById('next').onclick = function(){nextquote()}
const  nextquote = () => {
const quoteshuffle = Math.floor(Math.random() * quotebox.length)
  const generateQuote = quotebox[quoteshuffle].quote
  const author = quotebox[quoteshuffle].author
  document.getElementById('quote').innerHTML=generateQuote
  document.getElementById('author').innerHTML=author
}

setInterval(nextquote, 10000)