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
	},
	{
		name: 'Hanna',
		image: 'img/cat-3.jpg',
		count: 0
	},
	{
		name: 'Guerry',
		image: 'img/cat-4.jpg',
		count: 0
	},{
		name: 'Oz',
		image: 'img/cat-5.jpg',
		count: 0
	},
	{
		name: 'Fold',
		image: 'img/cat-6.jpg',
		count: 0
	}
];

var generateList = function() {
	var $ul  = document.createElement('ul');		
	
	for ( var i in cats ) {
		var $li = document.createElement('li');
			$li.innerHTML = cats[i].name;
			$li.setAttribute('data-ref', i);

		$li.addEventListener('click', selectCat, false);
		$ul.appendChild($li);
	}

	document.querySelector('.cat-list').appendChild($ul);
};

var selectCat = function() {
	var html = '',
		ref  = this.getAttribute('data-ref'),
		$ctn = document.querySelector('.cat-view');

	html = '<p>'+cats[ref].name+': <span>'+cats[ref].count+'</span></p><img src="'+cats[ref].image+'" data-ref="'+ref+'">';
	$ctn.innerHTML = html;

	$ctn.querySelector('img').addEventListener('click', addCount, false);
};

var addCount = function() {
	var $count = this.parentNode.querySelector('p span');
	$count.innerHTML = ++cats[this.getAttribute('data-ref')].count;
};

generateList();


