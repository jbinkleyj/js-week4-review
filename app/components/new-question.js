import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },

    saveQuestion() {
      var params = {
        content: this.get('content'),
        author: this.get('author'),
        notes: this.get('notes'),
        city: this.get('city'),
        latitude: this.get('latitude'),
        longitude: this.get('longitude')
      };
      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion', params);
    },

    formHide() {
      this.set('addNewQuestion', false);
    }
  }
});
