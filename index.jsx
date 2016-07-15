import React from 'react';

const Spinner = React.createClass({
   createClassName: function() {
    let myClassName = 'react-svg-spinner';
    myClassName = `${myClassName} ${"spinner-size-" + this.props.size}`;
    myClassName =  `${myClassName} ${"spinner-animation-" + this.props.animation}`;
    // myClassName = `${myClassName} ${this.props.blurEffect}`;
    return myClassName;
  },
  render: function() {
    const myFinalClassName = this.createClassName();
    return (
        <svg
         className={myFinalClassName} 
         viewBox="0 0 66 66">
          <circle className={'react-svg-path ' + (this.props.pathColor || '')} fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30"></circle>
        </svg>
    );
  },
  getDefaultProps: function() {
    return {
      pathColor: 'gray',
      size: 'medium',
      animation: 'medium'
    };
  }
});
export default Spinner;
