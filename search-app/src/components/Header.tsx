import { Component, ReactNode } from 'react';

export class Header extends Component {
  public render(): ReactNode {
    return (
      <header className="bg-blue-500 p-4">
        <h1 className="text-white text-2xl font-bold">Pokemon Search</h1>
      </header>
    );
  }
}
