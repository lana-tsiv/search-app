import { Component, ReactNode } from 'react';

import { Main } from './components/Main';
import { Header } from './components/Header';
import { ErrorBoundary } from './components/ErrorBoundary';

export class App extends Component {
  public render(): ReactNode {
    return (
      <ErrorBoundary>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <Main />
        </div>
      </ErrorBoundary>
    );
  }
}

export default App;
