import { Component, ReactNode } from 'react';
import { Loader2 } from 'lucide-react';

import { Pokemon } from '../types';

import { Card } from './Card';

interface Props {
  pokemons: Pokemon[];
  loading: boolean;
  error: string | null;
}

export class CardList extends Component<Props> {
  public render(): ReactNode {
    const { pokemons, loading, error } = this.props;

    if (error) {
      return (
        <div className="p-4 bg-red-50 border border-red-200 rounded-md">
          <p className="text-red-600">Error: {error}</p>
        </div>
      );
    }

    if (loading) {
      return (
        <div className="flex justify-center items-center p-8">
          <Loader2 className="animate-spin-slow h-8 w-8 text-blue-600" />
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 border border-gray-300 rounded-lg">
        {pokemons.map((pokemon) => (
          <Card key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
    );
  }
}
