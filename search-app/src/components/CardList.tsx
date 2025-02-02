import { Component, ReactNode } from 'react';

import { Card } from './Card';

export class CardList extends Component {
  public render(): ReactNode {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 border border-gray-300 rounded-lg">
        <Card />
      </div>
    );
  }
}
