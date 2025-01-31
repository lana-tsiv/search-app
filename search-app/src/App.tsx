import { Component, ReactNode } from 'react';

export class App extends Component {
  public render(): ReactNode {
    return (
      <div className="bg-red-500">
        <p className="text-3xl font-bold underline">Hello world!</p>
      </div>
    );
  }
}

export default App;
