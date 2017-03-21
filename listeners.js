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
//begin cart code workspace
document.addEventListener ('click', function () {
  var $cartButton = event.target.tagName //button

  if($cartButton === 'BUTTON') {
    var $buttonID = event.target.id
    for(var i = 0; i < items.length; i++){
      if(items[i].id === $buttonID){
        cart.push(items[i])
      }
    }

  }
})
