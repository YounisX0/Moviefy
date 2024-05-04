const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');
allSideMenu.forEach(item=> {
	const li = item.parentElement;
	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');
menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})
const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');
searchButton.addEventListener('click', function (e) {
	if(window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if(searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
})
if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}
window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})
fetch('index.html')
  .then(response => response.text())
  .then(data => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(data, 'text/html');
    const movieTitles = doc.querySelectorAll('.movie-title');
    const tbody = document.getElementById('movieList');

    movieTitles.forEach(title => {
        const row = document.createElement('tr');
        const movieCell = document.createElement('td');
        movieCell.textContent = title.textContent;
        const ratingCell = document.createElement('td');
        ratingCell.textContent = '5.0'; 
        const optionsCell = document.createElement('td');

        const editIcon = document.createElement('i');
        editIcon.classList.add('bx', 'bxs-edit-alt');
        const editButton = document.createElement('button');
        editButton.appendChild(editIcon);
		editButton.classList.add('btn');
        optionsCell.appendChild(editButton);

        const removeIcon = document.createElement('i');
        removeIcon.classList.add('bx', 'bxs-minus-circle');
        const removeButton = document.createElement('button');
        removeButton.appendChild(removeIcon);
		removeButton.classList.add('btn');
        optionsCell.appendChild(removeButton);

        row.appendChild(movieCell);
        row.appendChild(ratingCell);
        row.appendChild(optionsCell);

        tbody.appendChild(row);
    });
  })
  .catch(error => console.error('Error fetching content:', error));