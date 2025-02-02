import { Component, ReactNode } from 'react';

export class Search extends Component {
  public render(): ReactNode {
    return (
      <div className="p-4 bg-white shadow-sm">
        <form className="flex gap-2">
          <input
            type="text"
            placeholder="Search pokemon..."
            className="flex-1 px-4 py-2 border rounded"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Search
          </button>
        </form>
      </div>
    );
  }
}
