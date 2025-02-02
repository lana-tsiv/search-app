import { Component, ReactNode } from 'react';

import { Pokemon } from '../types';

interface Props {
  pokemon: Pokemon;
}

export class Card extends Component<Props> {
  public render(): ReactNode {
    const { name, url } = this.props.pokemon;
    const id = url.split('/')[6];
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

    return (
      <div className="bg-white rounded-lg shadow-md p-4">
        <img src={imageUrl} alt={name} className="w-32 h-32 mx-auto" />
        <h3 className="text-xl font-semibold text-center mt-2 capitalize">
          {name}
        </h3>
        <p className="text-gray-600 text-center">{id}</p>
      </div>
    );
  }
}
