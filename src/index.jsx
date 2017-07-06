import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import 'bootstrap/dist/css/bootstrap.css';


import Template from './components/template';


const renderApp = (Component) => {
  render(
    <AppContainer>
      <Component headline="Test Headline" count={12345454545} showCount />
    </AppContainer>,
    document.querySelector('#react-app'),
  );
};

renderApp(Template);

if (module && module.hot) {
  module.hot.accept('./components/template', () => {
    renderApp(Template);
  });
}


