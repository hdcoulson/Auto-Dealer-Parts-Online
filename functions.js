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
  var $detailsLink = document.createElement('a')
  var $cartButton = document.createElement('button')

  $mediaHeading.textContent = container.mediaHeading
  $itemDescription.textContent = container.itemDescription
  $itemPrice.textContent = container.itemPrice
  $buttonGroup.textContent = container.buttonGroup
  $cartButton.textContent = 'Add to cart'
  $detailsLink.textContent = 'Details...'

  $media.classList.add('media')
  $mediaLeft.classList.add('media-left')
  $a.classList.add('a')
  $img.classList.add('media-object')
  $mediaBody.classList.add('media-body')
  $mediaHeading.classList.add('media-heading')
  $itemPrice.classList.add('price')
  $buttonGroup.classList.add('btn-group')
  $cartButton.classList.add('btnbtn-default')
  $detailsLink.classList.add('a')

  $img.setAttribute('src', container.photo)
  $media.setAttribute('id', container.id)
  $detailsLink.setAttribute('href', '#')
  $detailsLink.setAttribute('id', 'detailsLink')

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
  var $item = document.querySelector('.container')
  $item.appendChild(document.body.appendChild(renderPost(item)))
})

var $detailsLink = document.querySelector('detailsLink')

document.addEventListener('click', function() {
  console.log(event.target.getAttribute('id'))

})
