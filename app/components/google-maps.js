import Ember from 'ember';

export default Ember.Component.extend({
  map: Ember.inject.service('google-maps'),

    actions: {
      showMap(question) {
        var container = this.$('.map-display')[0];
        var options = {
          center: this.get('map').center(question.get('latitude'), question.get('longitude')),
          zoom: 15
        };
        this.get('map').findMap(container, options);
      }
    }
  });
