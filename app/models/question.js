import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr(),
  author: DS.attr(),
  notes: DS.attr(),
  city: DS.attr(),
  answers: DS.hasMany('answer', { async: true }),
  latitude: DS.attr('number'),
  longitude: DS.attr('number')
});
