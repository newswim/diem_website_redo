class MapTemplate extends BlazeComponent {
    onCreated() {
        GoogleMaps.load();
        GoogleMaps.ready('diemMap', function(map) {
            // Add a marker to the map once it's ready
            var marker = new google.maps.Marker({
                position: map.options.center,
                map: map.instance
            });
        });
    }

    diemMapOptions() {
        // Make sure the maps API has loaded
        if (GoogleMaps.loaded()) {
        // Map initialization options
            return {
                center: new google.maps.LatLng(32.979859, -96.850981),
                zoom: 12
            };
        }
    }
}

MapTemplate.register('MapTemplate');
