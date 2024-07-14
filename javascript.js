document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.getElementById('registrationForm');
    const bookingForm = document.getElementById('bookingForm');
    const roomList = document.getElementById('roomList');

    let rooms = [];

    registrationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const room = {
            ownerName: document.getElementById('ownerName').value,
            propertyName: document.getElementById('propertyName').value,
            roomName: document.getElementById('roomName').value,
            floorSize: document.getElementById('floorSize').value,
            numBeds: document.getElementById('numBeds').value,
            amenities: document.getElementById('amenities').value,
            isBooked: false,
            bookingDetails: {},
        };
        rooms.push(room);
        renderRooms();
        registrationForm.reset();
    });

    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const roomNameBooking = document.getElementById('roomNameBooking').value;
        const room = rooms.find(room => room.roomName === roomNameBooking && !room.isBooked);
        if (room) {
            const bookingDetails = {
                customerName: document.getElementById('customerName').value,
                roomNameBooking: document.getElementById('roomNameBooking').value,
                startDate: document.getElementById('startDate').value,
                endDate: document.getElementById('endDate').value
            };
            room.isBooked = true;
            room.bookingDetails = bookingDetails;
            renderRooms();
            bookingForm.reset();
        } else {
            alert('Room is not available or does not exist.');
        }
    });

    function renderRooms() {
        roomList.innerHTML = '';
        rooms.forEach(room => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span><strong>Room Name:</strong> ${room.roomName}</span>
                <span><strong>Owner:</strong> ${room.ownerName}</span>
                <span><strong>Property:</strong> ${room.propertyName}</span>
                <span><strong>Floor Size:</strong> ${room.floorSize} sq ft</span>
                <span><strong>Beds:</strong> ${room.numBeds}</span>
                <span><strong>Amenities:</strong> ${room.amenities}</span>
                <span><strong>Status:</strong> ${room.isBooked ? 'Booked' : 'Available'}</span>
            `;
            roomList.appendChild(li);
        });
    }
});
