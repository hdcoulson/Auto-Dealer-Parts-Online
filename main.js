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
      itemDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor',
      itemPrice: '$250.00 each',
      button: 'add to cart'
    },
    {
      mediaHeading: 'Filters',
      itemDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor',
      itemPrice: '$100.00 each',
      button: 'add to cart'
    },
    {
    mediaHeading: 'Wheels',
    itemDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor',
    itemPrice: '$500.00 each',
    button: 'add to cart'
    }
  ]

  function renderPost(container) {
    var $container = document.createElement('div')
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

    $media.textContent = container.media
    $mediaLeft.textContent = container.mediaLeft
    $a.textContent = container.a
    $img.textContent = container.img
    $mediaBody.textContent = container.mediaBody
    $mediaHeading.textContent = container.mediaHeading
    $itemDescription.textContent = container.itemDescription
    $itemPrice.textContent = container.itemPrice
    $buttonGroup.textContent = container.buttonGroup
    $button.textContent = container.button

    $container.classList.add('container')
    $media.classList.add('media')
    $mediaLeft.classList.add('media-left')
    $a.classList.add('a')
    $img.classList.add('img')
    $mediaBody.classList.add('media-body')
    $mediaHeading.classList.add('media-heading')
    $itemPrice.classList.add('price')
    $buttonGroup.classList.add('btn-group')
    $button.classList.add('btnbtn-default')

    //$img.setAttribute(src, 'brakes.jpg')


    $container.appendChild($media)
    $container.appendChild($mediaLeft)
    $container.appendChild($a)
    $container.appendChild($img)
    $container.appendChild($mediaBody)
    $container.appendChild($mediaHeading)
    $container.appendChild($itemDescription)
    $container.appendChild($itemPrice)
    $container.appendChild($buttonGroup)
    $container.appendChild($button)

    return $container
  }

items.forEach(function (item) {
  document.body.appendChild(renderPost(item))
})
