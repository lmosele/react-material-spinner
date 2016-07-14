import React from 'react';
import Spinner from '../index.jsx';

const App = React.createClass({
  render: function() {
    const style = {
      height: 50,
      width: 50,
    };
    return (
      <div>
        <Spinner style={style} pathColor="blue" />
      </div>
    );
  }
});

export default App;
