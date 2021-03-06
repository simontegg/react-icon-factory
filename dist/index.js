// Generated by CoffeeScript 1.9.1
var React, objectAssign;

React = require('react');

objectAssign = require('object-assign');

module.exports = function(icons) {
  return React.createClass({
    propTypes: {
      onClick: React.PropTypes.func,
      icon: React.PropTypes.string.isRequired,
      size: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
      style: React.PropTypes.object
    },
    getDefaultProps: function() {
      return {
        size: 24,
        style: {}
      };
    },
    render: function() {
      var onClick, styles;
      onClick = this.props.onClick;
      styles = {
        fill: "currentcolor",
        verticalAlign: "middle",
        width: this.props.size,
        height: this.props.size
      };
      return React.createElement("svg", {
        "viewBox": "0 0 24 24",
        "preserveAspectRatio": "xMidYMid meet",
        "fit": true,
        "onClick": onClick,
        "style": objectAssign(styles, this.props.style)
      }, icons[this.props.icon]);
    }
  });
};
