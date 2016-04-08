import Ember from 'ember';

export default Ember.Component.extend({

  fullDetail: Ember.computed('question.content', 'question.author', function() {
      return this.get('question.content') + ' by: ' + this.get('question.author');
    }),

  actions: {

  }
});
