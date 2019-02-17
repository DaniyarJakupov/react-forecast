'use strict';

var React = require('react');
var createReactClass = require('create-react-class');

module.exports = createReactClass({
  displayName: 'Forecast',

  getDefaultProps: function () {
    return {
      height: 245,
      width: '100%'
    };
  },

  render: function () {
    var url = "//forecast.io/embed/#lat=" + this.props.latitude + "&lon=" + this.props.longitude + ("&name=" + this.props.name || '') + ("&color=" + this.props.color || '') + ("&font=" + this.props.font || '') + ("&units=" + this.props.units || '');

    return React.createElement('iframe', { type: 'text/html', height: this.props.height, width: this.props.width, frameBorder: '0', src: url });
  }
});

