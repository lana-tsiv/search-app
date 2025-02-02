import { Component } from 'react';

export class ErrorButton extends Component {
  public render() {
    return (
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        onClick={() => {
          throw new Error('Error!');
        }}
      >
        {' '}
        Error
      </button>
    );
  }
}
