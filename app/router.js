import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('statuses');
  this.route('status', { path: 'status/:status-row' });
});

export default Router;
