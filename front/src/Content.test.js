import React from 'react'
import { shallow } from 'enzyme'
import ReactDOM from 'react-dom';

import Content from './Content'



    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Content />, div);
        ReactDOM.unmountComponentAtNode(div);
      });

