/*
<div class="container">
  <div class="media">
    <div class="media-left">
      <a href="#">
        <img class="media-object" src="brakes.jpg" alt="brakes">
      </a>
    </div>
  <div class="media-body">
    <h4 class="media-heading">Brakes</h4>
    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
      irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
      deserunt mollit anim id est laborum.</p>
      <span id="brakesPrice" class="price">$250.00 each</span>
      <div class="btn-group" role="group" aria-label="...">
        <button id= "brakesButton" type="button" class="btn btn-default">Add to cart</button>
      </div>
    </div>
  </div>
  */

  var items = [
    {
      mediaHeading: 'Brakes',
      itemDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      itemPrice: '$250.00 each ',
      photo: 'brakes.jpg',
    },
    {
      mediaHeading: 'Filters',
      itemDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      itemPrice: '$100.00 each ',
      photo: 'filter.jpg',
    },
    {
    mediaHeading: 'Wheels',
    itemDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    itemPrice: '$500.00 each ',
    photo: 'wheel.jpg',
    }
  ]


  function renderPost(container) {
    var $media = document.createElement('div')
    var $mediaLeft = document.createElement('div')
    var $a = document.createElement('a')
    var $img = document.createElement('img')
    var $mediaBody = document.createElement('div')
    var $mediaHeading = document.createElement('h4')
    var $itemDescription = document.createElement('p')
    var $itemPrice = document.createElement('span')
    var $buttonGroup = document.createElement('div')
    var $button = document.createElement('button')

    $mediaHeading.textContent = container.mediaHeading
    $itemDescription.textContent = container.itemDescription
    $itemPrice.textContent = container.itemPrice
    $buttonGroup.textContent = container.buttonGroup
    $button.textContent = 'Add to cart'

    $media.classList.add('media')
    $mediaLeft.classList.add('media-left')
    $a.classList.add('a')
    $img.classList.add('media-object')
    $mediaBody.classList.add('media-body')
    $mediaHeading.classList.add('media-heading')
    $itemPrice.classList.add('price')
    $buttonGroup.classList.add('btn-group')
    $button.classList.add('btnbtn-default')

    $img.setAttribute('src', container.photo)

    $media.appendChild($mediaLeft)
    $media.appendChild($mediaBody)
    $mediaLeft.appendChild($a)
    $a.appendChild($img)
    $mediaBody.appendChild($mediaHeading)
    $mediaBody.appendChild($itemDescription)
    $mediaBody.appendChild($itemPrice)
    $mediaBody.appendChild($buttonGroup)
    $buttonGroup.appendChild($button)

    return $media
  }

  items.forEach(function (item) {
    var $item = document.querySelector('.container')
    $item.appendChild(document.body.appendChild(renderPost(item)))
  })
