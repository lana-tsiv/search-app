import { Component, ReactNode } from 'react';

import { Pokemon, PokemonApiResponse } from '../types';

import { Search } from './Search';
import { ErrorButton } from './ErrorButton';
import { CardList } from './CardList';

interface State {
  pokemons: Pokemon[];
  loading: boolean;
  error: string | null;
  offset: number;
  limit: number;
}

export class Main extends Component<object, State> {
  public state: State = {
    pokemons: [],
    loading: false,
    error: null,
    offset: 0,
    limit: 20,
  };

  public componentDidMount(): void {
    const savedTerm = localStorage.getItem('searchTerm') || '';
    this.fetchPokemons(savedTerm);
  }

  private fetchPokemons = async (searchTerm: string): Promise<void> => {
    this.setState({ loading: true, error: null });

    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?offset=${this.state.offset}&limit=${this.state.limit}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: PokemonApiResponse = await response.json();
      let filteredResults = Array.isArray(data.results) ? data.results : [];

      if (searchTerm) {
        filteredResults = data.results.filter((pokemon) =>
          pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      this.setState({
        pokemons: filteredResults,
        loading: false,
      });
    } catch (error) {
      this.setState({ error: (error as Error).message, loading: false });
    }
  };

  public render(): ReactNode {
    const { pokemons, loading, error } = this.state;

    return (
      <main className="container mx-auto">
        <Search onSearch={this.fetchPokemons} />
        <CardList pokemons={pokemons} loading={loading} error={error} />
        <div className="p-4">
          <ErrorButton />
        </div>
      </main>
    );
  }
}
