//Details View
document.addEventListener('click', function() {
  var $clickedItem = event.target.id

  function getMatches(allItems) {
    var $matches = []
    var $listView = document.querySelector('#list-view.container')
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

//Cart Quantity Button
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

//Cart View
document.addEventListener('click', function(){
  var $clickedItem = event.target.id
  var $detailsView = document.querySelector('#details-view')

  if($clickedItem === 'cart-quantity-button') {
    if($detailsView !== null) {
      var $cartItems = renderCart(cart[0])
      var $cartView = document.querySelector('#cart-view')
      $cartView.innerHTML=''
      $cartView.appendChild($cartItems)
      $detailsView.setAttribute('class', 'hidden')
    }
  }
})

//Checkout view - This needs content
document.addEventListener('click', function (){
  var $clickedItem = event.target.tagName
  var $checkoutView = document.querySelector('#checkout-view')

  if($clickedItem === 'checkout'){
    $checkoutView.innerHTML=''
    $checkoutView.appendChild

  }
})


//Return to list View - this needs more work not to conflict with details view
/*
a.addEventListener('click', function () {
  var $clickeditem = event.target.class

  if($clickeditem === 'a'){
    var $cartView = document.querySelector('#cart-view')
    var $detailsView = document.querySelector('#details-view')
    var $listView = document.querySelector('#list-view')
    $detailsView.setAttribute('class', 'hidden')
    $cartView.setAttribute('class', 'hidden')
    $listView.setAttribute('class', 'container')
  }

})
*/
