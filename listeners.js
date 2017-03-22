document.addEventListener('click', function() {
  var $clickedItem = event.target.id

  function getMatches(allItems) {
    var $matches = []
    var $listView = document.querySelector('#list-view.container')
    var $cartView = document.querySelector('#cart-view')
    allItems.forEach(function (item) {
      if(item.id === $clickedItem) {
        if($listView !== null) {
          $listView.setAttribute('class', 'hidden')
        }
        $matches.push(item)
      }
    })
    return $matches
  }

  var matches = getMatches(items)
  var $matchedItem = renderSelectedItem(matches[0])
  var $detailsView = document.querySelector('#details-view')
  $detailsView.innerHTML=''
  $detailsView.appendChild($matchedItem)

})

document.addEventListener ('click', function () {
  var $addToCartButton = event.target.tagName
  var cartTotal = document.getElementById("cart-quantity-button")
  var cartLength = cart.length

  if($addToCartButton === 'BUTTON') {
    var $buttonID = event.target.id
    for(var i = 0; i < items.length; i++){
      if(items[i].id === $buttonID){
        cart.push(items[i])
        cartTotal.textContent = cart.length
      }
    }
    }
})
//begin cart workspace

document.addEventListener('click', function(){
  var $clickedItem = event.target.id // = 'cart-quantity-button'
  var $detailsView = document.querySelector('#details-view')


  if($clickedItem === 'cart-quantity-button') {
    if($detailsView !== null) {
      $detailsView.setAttribute('class', 'hidden')
    }
  }
  var $cartItems = renderCart(cart[0])
  var $cartView = document.querySelector('#cart-view')
  $cartView.innerHTML=''
  $cartView.appendChild($cartItems)
})

//end cart workspace