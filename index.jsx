import React from 'react';

const Spinner = React.createClass({
   
  render: function() {
    
    return (
        <svg
          pathColor={this.props.pathColor}
         className={'react-svg-spinner ' + (this.props.className || '')} 
         viewBox="0 0 66 66">
          <circle className={'react-svg-path ' + (this.props.pathColor || '')} fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30"></circle>
        </svg>
    );
  },

  getDefaultProps: function() {
    return {
      pathColor: 'gray'
    };
  }
});

export default Spinner;
