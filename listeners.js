//Details View
document.addEventListener('click', function(event) {
  if(event.target.classList.contains('details')){

  var $clickedItemId = event.target.id

  function getMatches(allItems) {
    var $matches = []
    var $listView = document.querySelector('#list-view.container')
    allItems.forEach(function (item) {
      if(item.id === $clickedItemId) {
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
  }
})

document.addEventListener ('click', function (event) {
  var $clickedItemTagName = event.target.tagName
  var cartTotal = document.getElementById("cart-quantity-button")
  var cartLength = cart.length
  var $clickedItemId = event.target.id
  var $detailsView = document.querySelector('#details-view')
  var $checkoutView = document.querySelector('#checkout-view')
  var $listView = document.querySelector('#list-view')
  var $cartView = document.querySelector('#cart-view')
  var $backlink = document.querySelector('#back-link')

  if(event.target.classList.contains('add-to-cart')) {
    var $buttonID = event.target.id
    for(var i = 0; i < items.length; i++){
      if(items[i].id === $buttonID){
        cart.push(items[i])
        cartTotal.textContent = cart.length
      }
    }
    }
  else if(event.target.classList.contains('cart-button')) {
      if($detailsView !== null) {
        var $cartItems = renderCart(cart[0])
        var $cartView = document.querySelector('#cart-view')
        $cartView.innerHTML=''
        $cartView.appendChild($cartItems)
        $detailsView.setAttribute('class', 'hidden')
        $listView.setAttribute('class', 'hidden')
        }
      }
  else if(event.target.classList.contains('checkout-button')){
      if($cartView !== null){
        var $checkout = renderCheckout()
        var $checkoutView = document.querySelector('#checkout-view')
        $checkoutView.innerHTML=''
        $checkoutView.appendChild($checkout)
        $cartView.setAttribute('class', 'hidden')
      }
    }
})

document.addEventListener ('click', function (event) {
  if(event.target.classList.contains('back-link')){
        viewSwitch()
  }
})
