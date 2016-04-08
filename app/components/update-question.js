import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
  actions: {
    updateQuestionForm() {
      this.set('updateQuestionForm', true);
    },
    update(question) {
      var params = {
        content: this.get('content'),
        author: this.get('author'),
        notes: this.get('notes'),
        city: this.get('city')
      };
      this.set('updateQuestionForm', false);
      this.sendAction('update', question, params);
    },
    formHide(){
      this.set('updateQuestionForm', false);
    }
  }
});
