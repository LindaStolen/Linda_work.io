import React from 'react';
import Header from './component/Header'
import Content from './component/Content'
import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {far} from '@fortawesome/free-regular-svg-icons'

import 'rsuite/styles/index.less'
library.add(fas, far)
function App() {
  return (
    <div className="App">
      <Header/>
      <Content/>
    </div>
  );
}

export default App;
