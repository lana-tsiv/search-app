import { Component, ReactNode } from 'react';

import { Card } from './Card';
import { Pokemon } from '../types';

interface Props {
  pokemons: Pokemon[];
}

export class CardList extends Component<Props> {
  public render(): ReactNode {
    const { pokemons } = this.props;
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 border border-gray-300 rounded-lg">
        {pokemons.map((pokemon) => (
          <Card key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
    );
  }
}
