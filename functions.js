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
  $mediaLeft.setAttribute('id', container.id)
  $mediaBody.setAttribute('id', container.id)
  $img.setAttribute('id', container.id)
  $mediaHeading.setAttribute('id', container.id)
  $itemPrice.setAttribute('id', container.id)
  $buttonGroup.setAttribute('id', container.id)
  $cartButton.setAttribute('id', container.id)
  $detailsLink.setAttribute('id', container.id)
  $itemDescription.setAttribute('id', container.id)
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
  var $listView = document.querySelector('#listView')
  $listView.appendChild(renderPost(item))
})

document.addEventListener('click', function() {
  var $clickedItem = event.target.id

  function getMatches(allItems) {
    var $matches = []
    allItems.forEach(function (item) {
      if(item.id === $clickedItem) {
        $matches.push(item)
      }
    })
    return $matches
  }

  var matches = getMatches(items)
  var $matchedItem = renderSelectedItem(matches[0])
  var $detailsView = document.querySelector('#detailsView')
  $detailsView.appendChild($matchedItem)

})


function renderSelectedItem (item) {
  var $media = document.createElement('div')
  var $mediaLeft = document.createElement('div')
  var $a = document.createElement('a')
  var $img = document.createElement('img')
  var $mediaBody = document.createElement('div')
  var $mediaHeading = document.createElement('h4')
  var $itemDetails = document.createElement('p')
  var $itemPrice = document.createElement('span')
  var $buttonGroup = document.createElement('div')
  var $cartButton = document.createElement('button')

  $mediaHeading.textContent = item.mediaHeading
  $itemDetails.textContent = item.itemDetails
  $itemPrice.textContent = item.itemPrice
  $buttonGroup.textContent = item.buttonGroup
  $cartButton.textContent = 'Add to cart'

  $media.classList.add('media')
  $mediaLeft.classList.add('media-left')
  $a.classList.add('a')
  $img.classList.add('media-object')
  $mediaBody.classList.add('media-body')
  $mediaHeading.classList.add('media-heading')
  $itemPrice.classList.add('price')
  $buttonGroup.classList.add('btn-group')
  $cartButton.classList.add('btnbtn-default')

  $img.setAttribute('src', item.photo)
  $media.setAttribute('id', item.id)
  $mediaLeft.setAttribute('id', item.id)
  $mediaBody.setAttribute('id', item.id)
  $img.setAttribute('id', item.id)
  $mediaHeading.setAttribute('id', item.id)
  $itemPrice.setAttribute('id', item.id)
  $buttonGroup.setAttribute('id', item.id)
  $cartButton.setAttribute('id', item.id)
  $itemDescription.setAttribute('id', item.id)
  $detailsLink.setAttribute('href', '#')

  $media.appendChild($mediaLeft)
  $media.appendChild($mediaBody)
  $mediaLeft.appendChild($a)
  $a.appendChild($img)
  $mediaBody.appendChild($mediaHeading)
  $mediaBody.appendChild($itemDetails)
  $mediaBody.appendChild($itemPrice)
  $mediaBody.appendChild($buttonGroup)
  $buttonGroup.appendChild($cartButton)

  return $media
}
