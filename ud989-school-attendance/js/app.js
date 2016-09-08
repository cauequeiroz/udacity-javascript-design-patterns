var Model = {
	init: function() {
		// Create students initial database
		if ( !localStorage.studentsBook ) {
			var studentsNames = ['Caue Queiroz', 'Itallo Sá Vieira', 'Mariana Santos', 'Thaina Nascimento', 'Ana Julia', 'Roberta Matos'],
				book = {};

			for ( s in studentsNames ) {
				var frequency = [];
				for ( var i=0; i<=11; i++ ) {
					var n = (Math.random() >= 0.5 );
					frequency.push(n);
				}
				book[studentsNames[s]] = frequency;
			}

			localStorage.studentsBook = JSON.stringify(book);
		}

		this.students = JSON.parse(localStorage.studentsBook);
	},

	students: null,

	update: function(student, frequency) {
		this.students[student] = frequency;

		this.updateDB();
	},

	updateDB: function() {
		localStorage.studentsBook = JSON.stringify(this.students);
	}
}

var View = {
	init: function() {
		this.ctn = document.querySelector('.book table tbody');
		this.render();
	},

	render: function() {
		var students = Octopus.getStudents(),
			html = '';

		for ( var i in students ) {
			var missed = students[i].length - students[i].filter(function(value) { return value }).length;

			html += '<tr><td class="student">'+i+'</td><td class="frequency">';
			for ( var j in students[i] ) {
				html += '<input type="checkbox" '+(students[i][j]?'checked':'')+'>';
			}
			html += '</td><td class="missed">'+missed+'</td></tr>';
		}

		this.ctn.innerHTML = html;

		var check = document.querySelectorAll('.frequency input'),
			size  = check.length;
		for ( var i=0; i<size; i++ ) {
			check[i].addEventListener('click', Octopus.changeDay, false);
		}
	}
}

var Octopus = {
	init: function() {
		Model.init();
		View.init();
	},

	getStudents: function() {
		return Model.students;
	},

	changeDay: function() {
		var ctn = this.parentNode.parentNode,
			student = ctn.querySelector('.student').innerHTML,
			frequency = [];

		ctn.querySelectorAll('.frequency input').forEach(function(elem, i) {
			frequency.push(elem.checked);
		});

		Model.update(student, frequency);
		View.render();
	}
}

Octopus.init();