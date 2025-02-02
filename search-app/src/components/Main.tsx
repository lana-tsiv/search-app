import { Component, ReactNode } from 'react';

import { Search } from './Search';
import { ErrorButton } from './ErrorButton';
// import { CardList } from './CardList';

export class Main extends Component {
  public render(): ReactNode {
    return (
      <main className="container mx-auto">
        <Search />
        <ErrorButton />
        {/* <CardList /> */}
      </main>
    );
  }
}
