function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 12 
    });
}

document.getElementById('deliveryForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const toast = new bootstrap.Toast(document.createElement('div'));
    toast.show();
    alert('¡Pedido recibido! Te contactaremos pronto.');
});

window.onload = initMap;
