<template>
  <!-- <div>
    <div>
      <h2>Search and add a pin</h2>
      <label>
        <gmap-autocomplete @place_changed="setPlace"></gmap-autocomplete>
        <button @click="addMarker">Add</button>
      </label>
      <br />
    </div>
    <br /> -->
    <!-- <gmap-map :center="center" :zoom="12" style="width:100%;  height: 300px;">
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center=m.position"
      ></gmap-marker>
    </gmap-map> -->
  <!-- </div> -->
  <div>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13183.271877792065!2d106.68749545877886!3d10.779863234366815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f385570472f%3A0x1787491df0ed8d6a!2sIndependence+Palace!5e0!3m2!1sen!2sjp!4v1566265785405!5m2!1sen!2sjp" width="100%" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>
  </div>
</template>

<script>
export default {
  name: "GoogleMap",
  data() {
    return {
      // default to Montreal to keep it simple
      // change this to whatever makes sense
      center: { lat: 45.508, lng: -73.587 },
      markers: [],
      places: [],
      currentPlace: null
    };
  },

  // mounted() {
  //   this.geolocate();
  // },

  // methods: {
  //   // receives a place object via the autocomplete component
  //   setPlace(place) {
  //     this.currentPlace = place;
  //   },
  //   addMarker() {
  //     if (this.currentPlace) {
  //       const marker = {
  //         lat: this.currentPlace.geometry.location.lat(),
  //         lng: this.currentPlace.geometry.location.lng()
  //       };
  //       this.markers.push({ position: marker });
  //       this.places.push(this.currentPlace);
  //       this.center = marker;
  //       this.currentPlace = null;
  //     }
  //   },
  //   geolocate: function() {
  //     navigator.geolocation.getCurrentPosition(position => {
  //       this.center = {
  //         lat: position.coords.latitude,
  //         lng: position.coords.longitude
  //       };
  //     });
  //   }
  // }
};
</script>