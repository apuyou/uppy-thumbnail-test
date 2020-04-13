import React, { useEffect } from 'react';
import Uppy from '@uppy/core';
import XHRUpload from '@uppy/xhr-upload';
import Dashboard from '@uppy/dashboard';
import '@uppy/core/dist/style.css';
import '@uppy/dashboard/dist/style.css';

import './App.css';

function App() {
  useEffect(() => {
    const uppy = Uppy({
      debug: true,
    })
      .use(Dashboard, {
        inline: true,
        target: '#drag-drop-area',
      })
      .use(XHRUpload, { endpoint: 'https://api2.transloadit.com' });

    uppy.on('complete', (result) => {
      console.log(
        'Upload complete! We’ve uploaded these files:',
        result.successful
      );
    });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <div id="drag-drop-area"></div>
      </header>
    </div>
  );
}

export default App;
