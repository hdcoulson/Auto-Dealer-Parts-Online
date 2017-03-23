//List Page View
function renderList(item) {
  var $media = document.createElement('div')
  var $mediaLeft = document.createElement('div')
  var $a = document.createElement('a')
  var $img = document.createElement('img')
  var $mediaBody = document.createElement('div')
  var $mediaHeading = document.createElement('h4')
  var $itemDescription = document.createElement('p')
  var $itemPrice = document.createElement('span')
  var $buttonGroup = document.createElement('div')
  var $detailsLink = document.createElement('a')
  var $cartButton = document.createElement('button')

  $mediaHeading.textContent = item.mediaHeading
  $itemDescription.textContent = item.itemDescription
  $itemPrice.textContent = toMoney(item.itemPrice)
  $buttonGroup.textContent = item.buttonGroup
  $cartButton.textContent = 'Add to cart'
  $detailsLink.textContent = 'Details...' + '  '

  $media.classList.add('media')
  $mediaLeft.classList.add('media-left')
  $a.classList.add('a')
  $img.classList.add('media-object')
  $mediaBody.classList.add('media-body', 'list-view')
  $mediaHeading.classList.add('media-heading')
  $itemPrice.classList.add('price')
  $buttonGroup.classList.add('btn-group')
  $cartButton.classList.add('btnbtn-default')
  $detailsLink.classList.add('a')

  $img.setAttribute('src', item.photo)
  $media.setAttribute('id', item.id)
  $mediaLeft.setAttribute('id', item.id)
  $mediaBody.setAttribute('id', item.id)
  $img.setAttribute('id', item.id)
  $mediaHeading.setAttribute('id', item.id)
  $itemPrice.setAttribute('id', item.id)
  $buttonGroup.setAttribute('id', item.id)
  $cartButton.setAttribute('id', item.id)
  $detailsLink.setAttribute('id', item.id)
  $itemDescription.setAttribute('id', item.id)
  $detailsLink.setAttribute('href', '#')

  $media.appendChild($mediaLeft)
  $media.appendChild($mediaBody)
  $mediaLeft.appendChild($a)
  $a.appendChild($img)
  $mediaBody.appendChild($mediaHeading)
  $mediaBody.appendChild($itemDescription)
  $mediaBody.appendChild($itemPrice)
  $mediaBody.appendChild($buttonGroup)
  $buttonGroup.appendChild($detailsLink)
  $buttonGroup.appendChild($cartButton)

  return $media
}

items.forEach(function (item) {
  var $listView = document.querySelector('#list-view')
  $listView.appendChild(renderList(item))
})


//Details Page View
function renderSelectedItem(item) {
  var $media = document.createElement('div')
  var $mediaLeft = document.createElement('div')
  var $a = document.createElement('a')
  var $img = document.createElement('img')
  var $mediaBody = document.createElement('div')
  var $mediaHeading = document.createElement('h4')
  var $itemDetails = document.createElement('p')
  var $itemPrice = document.createElement('span')
  var $itemButtonGroup = document.createElement('div')
  var $cartButton = document.createElement('button')
  var $backLink = document.createElement('a')

  $mediaHeading.textContent = item.mediaHeading
  $itemDetails.textContent = item.itemDetails
  $itemPrice.textContent = toMoney(item.itemPrice)
  $itemButtonGroup.textContent = item.itemButtonGroup
  $cartButton.textContent = 'Add to cart'
  $backLink.textContent = 'Back to list  '

  $media.classList.add('media')
  $mediaLeft.classList.add('media-left')
  $a.classList.add('a')
  $img.classList.add('media-object')
  $mediaBody.classList.add('media-body', 'details-view')
  $mediaHeading.classList.add('media-heading')
  $itemPrice.classList.add('price')
  $itemButtonGroup.classList.add('btn-group')
  $cartButton.classList.add('btnbtn-default')
  $backLink.classList.add('a', 'back-link')

  $img.setAttribute('src', item.photo)
  $media.setAttribute('id', item.id)
  $mediaLeft.setAttribute('id', item.id)
  $mediaBody.setAttribute('id', item.id)
  $img.setAttribute('id', item.id)
  $mediaHeading.setAttribute('id', item.id)
  $itemPrice.setAttribute('id', item.id)
  $itemButtonGroup.setAttribute('id', item.id)
  $cartButton.setAttribute('id', item.id)
  $itemDetails.setAttribute('id', item.id)
  $backLink.setAttribute('href', '#')
  $backLink.setAttribute('id', item.id)

  $media.appendChild($mediaLeft)
  $media.appendChild($mediaBody)
  $mediaLeft.appendChild($a)
  $a.appendChild($img)
  $mediaBody.appendChild($mediaHeading)
  $mediaBody.appendChild($itemDetails)
  $mediaBody.appendChild($itemPrice)
  $mediaBody.appendChild($itemButtonGroup)
  $itemButtonGroup.appendChild($backLink)
  $itemButtonGroup.appendChild($cartButton)

  return $media
}
//Shopping Cart View
function renderCart(item) {
  var $media = document.createElement('div')
  var $cartTitle = document.createElement('h1')
  var $mediaLeft = document.createElement('div')
  var $a = document.createElement('a')
  var $img = document.createElement('img')
  var $mediaBody = document.createElement('div')
  var $mediaHeading = document.createElement('h4')
  var $itemDetails = document.createElement('p')
  var $itemPrice = document.createElement('span')
  var $cartTotalTitle = document.createElement('div')
  var $cartTotal = document.createElement('div')
  var $buttonGroup = document.createElement('div')
  var $checkoutButton = document.createElement('button')

  $cartTitle.textContent = 'SHOPPING CART'
  $mediaHeading.textContent = item.mediaHeading
  $itemDetails.textContent = item.itemDetails
  $itemPrice.textContent = toMoney(item.itemPrice)
  $cartTotalTitle.textContent = 'CART TOTAL'
  $cartTotal.textContent = toMoney(cartTotal(cart))
  $checkoutButton.textContent = 'CHECKOUT'

  $media.classList.add('media')
  $cartTitle.classList.add('media-heading', 'title')
  $mediaLeft.classList.add('media-left')
  $a.classList.add('a')
  $img.classList.add('media-object')
  $mediaBody.classList.add('media-body', 'cart-view')
  $mediaHeading.classList.add('media-heading')
  $itemPrice.classList.add('price')
  $cartTotalTitle.classList.add('btnbtn-default', 'cart-total-title')
  $cartTotal.classList.add('btnbtn-default', 'cart-total')
  $buttonGroup.classList.add('btn-group')
  $checkoutButton.classList.add('btnbtn-default')

  $img.setAttribute('src', item.photo)
  $media.setAttribute('id', item.id)
  $cartTitle.setAttribute('id', item.id)
  $mediaLeft.setAttribute('id', item.id)
  $mediaBody.setAttribute('id', item.id)
  $img.setAttribute('id', item.id)
  $mediaHeading.setAttribute('id', item.id)
  $itemPrice.setAttribute('id', item.id)
  $cartTotalTitle.setAttribute('id', item.id)
  $cartTotal.setAttribute('id', item.id)
  $buttonGroup.setAttribute('id', item.id)
  $checkoutButton.setAttribute('id', 'checkout')

  $media.appendChild($cartTitle)
  $media.appendChild($mediaLeft)
  $media.appendChild($mediaBody)
  $mediaLeft.appendChild($a)
  $a.appendChild($img)
  $mediaBody.appendChild($mediaHeading)
  $mediaBody.appendChild($itemDetails)
  $mediaBody.appendChild($itemPrice)
  $mediaBody.appendChild($cartTotalTitle)
  $mediaBody.appendChild($cartTotal)
  $mediaBody.appendChild($buttonGroup)
  $mediaBody.appendChild($checkoutButton)

  return $media
}

//Checkout view - This needs content
function checkout(item){

}


//Formats a price
function toMoney(number){
  var price = '$' + number.toFixed(2) + ' '
  return price
}

//Cart Total
function cartTotal(cart) {
  var total = 0
  for(var i = 0; i < cart.length; i++){
      total = cart[i].itemPrice + total
  }
  return total
}
