import { Component, ReactNode } from 'react';

export class ErrorButton extends Component {
  private throwError = (): void => {
    throw new Error('Test error!');
  };

  public render(): ReactNode {
    return (
      <button
        onClick={this.throwError}
        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Error!
      </button>
    );
  }
}
