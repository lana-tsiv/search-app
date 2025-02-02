import { Component, ReactNode } from 'react';

import { Search } from './Search';
import { ErrorButton } from './ErrorButton';
// import { CardList } from './CardList';

export class Main extends Component {
  private handleSearch = (query: string) => {
    console.log('Search query:', query);
  };

  public render(): ReactNode {
    return (
      <main className="container mx-auto">
        <Search onSearch={this.handleSearch} />
        <ErrorButton />
        {/* <CardList /> */}
      </main>
    );
  }
}
