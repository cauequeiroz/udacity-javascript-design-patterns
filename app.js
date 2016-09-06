var model = {
	cats: [
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
	],

	getAllCats: function() {
		return this.cats;
	},

	addCount: function(cat) {
		this.cats[cat].count++;
	}
}

var octopus = {
	init: function() {
		view.renderList();
		document.querySelectorAll('.cat-list li')[0].click();
	},

	getCats: function() {
		return model.getAllCats();
	},

	selectCat: function() {
		if ( this.classList.contains('selected') ) return;

		var catSelected = document.querySelector('.cat-list .selected'),
			cat = this.getAttribute('data-ref');

		if ( catSelected ) {
			catSelected.classList.remove('selected');
		}
		this.classList.add('selected');

		view.renderCat(cat);
	},

	addCount: function() {
		var cat = this.getAttribute('data-ref');
		model.addCount(cat);
		view.renderCat(cat);
	}
}


var view = {
	renderList: function() {
		var $ul  = document.createElement('ul'),
			cats = octopus.getCats();		
	
		for ( var i in cats ) {
			var $li = document.createElement('li');
				$li.innerHTML = cats[i].name;
				$li.setAttribute('data-ref', i);

			$li.addEventListener('click', octopus.selectCat, false);
			$ul.appendChild($li);
		}

		document.querySelector('.cat-list').appendChild($ul);
	},

	renderCat: function(cat) {
		var html = '',
			cats = octopus.getCats(),
			$ctn = document.querySelector('.cat-view');

		html = '<p>'+cats[cat].name+': <span>'+cats[cat].count+'</span></p><img src="'+cats[cat].image+'" data-ref="'+cat+'">';
		$ctn.innerHTML = html;

		$ctn.querySelector('img').addEventListener('click', octopus.addCount, false);
	}
}

// Initialize app
octopus.init();






