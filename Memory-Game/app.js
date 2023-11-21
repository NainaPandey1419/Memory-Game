document.addEventListener('DOMContentLoaded', () => {
  //list all card options
  const cardArray = [
    {
      name: 'cheeseburger',
      img: 'images/food1.png'
    },
    {
      name: 'fries',
      img: 'images/food2.png'
    },
    {
      name: 'hotdog',
      img: 'images/food3.png'
    },
    {
      name: 'ice-cream',
      img: 'images/food4.png'
    },
    {
      name: 'milkshake',
      img: 'images/food5.png'
    },
    {
      name: 'pizza',
      img: 'images/food6.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/food1.png'
    },
    {
      name: 'fries',
      img: 'images/food2.png'
    },
    {
      name: 'hotdog',
      img: 'images/food3.png'
    },
    {
      name: 'ice-cream',
      img: 'images/food4.png'
    },
    {
      name: 'milkshake',
      img: 'images/food5.png'
    },
    {
      name: 'pizza',
      img: 'images/food6.png'
    },
  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []
  function confetti() {document.querySelector('.confetti')}

  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', 'images/1.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  //check for matches
  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]

    if (optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/1.png')
      cards[optionTwoId].setAttribute('src', 'images/1.png')
      alert('You have clicked the same image!')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match')
      cards[optionOneId].setAttribute('src', 'images/white.png')
      cards[optionTwoId].setAttribute('src', 'images/white.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'images/1.png')
      cards[optionTwoId].setAttribute('src', 'images/1.png')
      // alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    console.log(cardsWon);
    console.log(resultDisplay);
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = 'Congratulations! You found them all!'
      confetti();
    }
  }

  //flip your card
  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500)
    }
  }

  createBoard()
})