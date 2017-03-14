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
      itemPrice: 250.00
    },
    {
      mediaHeading: 'Filters',
      itemDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor',
      itemPrice: 100.00
    },
    {
    mediaHeading: 'Wheels',
    itemDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor',
    itemPrice: 500.00
    }
  ]

function renderPost(post) {
  var $container = document.createElement('div')
  var $media = document.createElement('div')
  var $href = document.createElement('div')
  var $mediaBody = document.createElement('div')
  var $mediaHeading = document.createElement('div')
  var $itemDescription = document.createElement('p')
  var $itemPrice = document.createElement('span')

  $media.textContent = post.media
  $href.textContent = post.href
  $mediaBody.textContent = post.mediaBody
  $mediaHeading.textContent = post.mediaHeading
  $itemDescription.textContent = post.itemDescription
  $itemPrice.textContent = post.itemPrice

  $post.appendchild($media)
  $post.appendchild($href)
  $post.appendchild($mediaBody)
  $post.appendchild($mediaheading)
  $post.appendchild($itemDescription)
  $post.appendchild($itemPrice)

  }

items.forEach(function(item){
  document.body.appendchild(renderPost(item))
}
)
