import DS from 'ember-data';

export default DS.Model.extend({
  start_date: DS.attr(),
  request_date: DS.attr(),
  end_date: DS.attr(),
  status: DS.attr(),
  total: DS.attr(),
  processed: DS.attr(),
  username: DS.attr(),
  fullname: DS.attr(),
  email: DS.attr(),
});
