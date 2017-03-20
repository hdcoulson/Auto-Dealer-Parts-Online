function renderList(container) {
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
  $mediaBody.classList.add('media-body', 'listView')
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
  $listView.appendChild(renderList(item))
})

document.addEventListener('click', function() {
  var $clickedItem = event.target.id

  function getMatches(allItems) {
    var $matches = []
    var $listView = document.querySelector('#listView.container')
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
  var $detailsView = document.querySelector('#detailsView')
  $detailsView.innerHTML=''
  $detailsView.appendChild($matchedItem)

})
//begin cart code workspace

//identify the item clicked from its button
document.addEventListener ('click', function () {
  var $cartButton = event.target.textContent
  console.log($cartButton)
})


//create an array of the items added to the cart





//end cart code workspace

function renderSelectedItem (item) {
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
  $itemPrice.textContent = item.itemPrice
  $itemButtonGroup.textContent = item.itemButtonGroup
  $cartButton.textContent = 'Add to cart'
  $backLink.textContent = 'Back to list  '

  $media.classList.add('media')
  $mediaLeft.classList.add('media-left')
  $a.classList.add('a')
  $img.classList.add('media-object')
  $mediaBody.classList.add('media-body', 'detailsView')
  $mediaHeading.classList.add('media-heading')
  $itemPrice.classList.add('price')
  $itemButtonGroup.classList.add('btn-group')
  $cartButton.classList.add('btnbtn-default')
  $backLink.classList.add('a')

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
