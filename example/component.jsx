import React from 'react';
import Spinner from '../index.jsx';

const App = React.createClass({
  render: function() {
    return (
      <Spinner pathColor='gray' size='small' animation='slow' />
    );
  }
});

export default App;
