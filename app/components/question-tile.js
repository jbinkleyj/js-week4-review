import Ember from 'ember';

export default Ember.Component.extend({
  // Computed Service - combine multiple properties to create a new single property
  fullDetail: Ember.computed('question.content', 'question.author', function() {
      return this.get('question.content') + ' by: ' + this.get('question.author');
    }),

  actions: {

  }
});
