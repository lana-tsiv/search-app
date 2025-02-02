import { Component, ReactNode } from 'react';

export class Card extends Component {
  public render(): ReactNode {
    return (
      <div className="bg-white rounded-lg shadow-md p-4">
        <p className="text-gray-600 text-center">Pockemon</p>
      </div>
    );
  }
}
