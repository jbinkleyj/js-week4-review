import Ember from 'ember';

export function howManyAnswers(params) {
  var answersTotal = params[0].get('answers');

  if (answersTotal = 0){
    return '';
  // } else if (answersTotal = 1){
  //   return '*';
  // } else if (answersTotal === 2){
  //   return '**';
  // } else if (answersTotal === 3){
  //   return '***';
  // } else if (answersTotal === 4){
  //   return '****';
  // } else if (answersTotal == 5){
  //   return '*****';
  // } else if (answersTotal >= 5){
  //   return '***** +';
  }
}

export default Ember.Helper.helper(howManyAnswers);
