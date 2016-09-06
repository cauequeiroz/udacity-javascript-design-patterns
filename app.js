var model = {
	currentCat: null,

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
	},

	addCat: function(name, url) {
		this.cats.push({
			name: name,
			image: url,
			count: 0
		});
	}
}

var octopus = {
	init: function() {
		model.currentCat = 0;
		view.renderList();

		document.querySelector('.admin').addEventListener('click', octopus.openAdmin, false);
		document.querySelector('.cancel').addEventListener('click', octopus.closeAdmin, false);
		document.querySelector('.save').addEventListener('click', octopus.addCat, false);
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

		model.currentCat = cat;
		view.renderCat(model.currentCat);
	},

	addCount: function() {
		var cat = this.getAttribute('data-ref');
		model.addCount(cat);
		view.renderCat(cat);
	},

	openAdmin: function() {
		if ( this.classList.contains('opened') ) return;

		this.classList.add('opened');
		document.querySelector('.cat-name').value = '';
		document.querySelector('.cat-url').value = '';
		document.querySelector('.admin-form').classList.add('show');
	},

	closeAdmin: function() {
		document.querySelector('.admin-form').classList.remove('show');
		document.querySelector('.admin').classList.remove('opened');
	},

	addCat: function() {
		var name  = document.querySelector('.cat-name').value,
			image = document.querySelector('.cat-url').value;

		if ( name !== '' && image !== '' ) {
			model.addCat(name, image);
			view.renderList();
			octopus.closeAdmin();
		}
	}
}


var view = {
	renderList: function() {
		var $ul  = document.querySelector('.cat-list ul'),
			cats = octopus.getCats();		
		
		$ul.innerHTML = '';
		for ( var i in cats ) {
			var $li = document.createElement('li');
				$li.innerHTML = cats[i].name;
				$li.setAttribute('data-ref', i);

			$li.addEventListener('click', octopus.selectCat, false);
			$ul.appendChild($li);
		}

		document.querySelectorAll('.cat-list li')[model.currentCat].click();
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






