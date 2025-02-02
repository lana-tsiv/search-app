import { Component, ReactNode } from 'react';

import { Main } from './components/Main';
import { Header } from './components/Header';

export class App extends Component {
  public render(): ReactNode {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
