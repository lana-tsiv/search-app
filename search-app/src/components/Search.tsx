import { Component, ReactNode, ChangeEvent, FormEvent } from 'react';

interface Props {
  onSearch: (searchTerm: string) => void;
}

interface State {
  searchTerm: string;
}

export class Search extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      searchTerm: localStorage.getItem('searchTerm') || '',
    };
  }

  private handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchTerm: event.target.value });
  };

  private handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.props.onSearch(this.state.searchTerm);
    localStorage.setItem('searchTerm', this.state.searchTerm);
  };

  public render(): ReactNode {
    return (
      <div className="p-4 bg-white shadow-sm">
        <form className="flex gap-2" onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Search pokemon..."
            className="flex-1 px-4 py-2 border rounded"
            value={this.state.searchTerm}
            onChange={this.handleChange}
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
