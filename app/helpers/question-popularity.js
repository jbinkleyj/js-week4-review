import Ember from 'ember';
//Helper - custome display property using if statement to display one of two icons depending on whether there is an answer or not.
export function questionPopularity(params) {
  var question = params[0];

  if(question.get('answers').get('length') < 1) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-exclamation-sign"></span>');
  }
  // else {
    // if(question.get('answers').get('length') >= 1) {
      return Ember.String.htmlSafe('<span class="glyphicon glyphicon-ok"></span>');
    // }
  // }
}

export default Ember.Helper.helper(questionPopularity);
