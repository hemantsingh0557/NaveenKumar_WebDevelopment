fetch('images.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('imageContainer');
        data.forEach(doctor => {
            const card = document.createElement('div');
            card.classList.add('card');

            const img = document.createElement('img');
            img.src = doctor.image;
            img.alt = 'Doctor Image';

            const details = document.createElement('div');
            details.classList.add('details');

            const name = document.createElement('p');
            name.textContent = doctor.name;
            name.classList.add('name');

            const specialty = document.createElement('p');
            specialty.textContent = doctor.specialty;
            specialty.classList.add('specialty');

            details.appendChild(name);
            details.appendChild(specialty);

            card.appendChild(img);
            card.appendChild(details);

            container.appendChild(card);
        });
    })
    .catch(error => console.error('Error fetching data:', error));








    