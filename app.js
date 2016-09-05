// Create variables
var $cat, $count, counter;

// Select elements
$cat   = document.querySelector('.cat img');
$count = document.querySelector('.cat p span');

// Create click logic
counter = 0;
var addCount = function() {
	$count.innerHTML = ++counter;
}

// Delegate event
$cat.addEventListener('click', addCount, false);