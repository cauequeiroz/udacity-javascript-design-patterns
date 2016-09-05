// Cat Storage
var cats = [
	{
		name: 'Pixel',
		image: 'img/cat-1.jpg',
		count: 0
	},
	{
		name: 'Tom',
		image: 'img/cat-2.jpg',
		count: 0
	}
];

// Print cats on html
var printCats = function() {
	for ( var i in cats ) {
		var html = '',
			$ctn = document.createElement('div');
			$ctn.setAttribute('class', 'cat');

		html = '<p>'+cats[i].name+': <span>'+cats[i].count+'</span></p><img src="'+cats[i].image+'" data-ref="'+i+'">';
		$ctn.innerHTML = html;

		$ctn.querySelector('img').addEventListener('click', addCount, false);

		document.querySelector('.cat-view').appendChild($ctn);
	}	
}

// Increment count when clicked
var addCount = function() {
	var $count = this.parentNode.querySelector('p span');
	$count.innerHTML = ++cats[this.getAttribute('data-ref')].count;
};

printCats();


