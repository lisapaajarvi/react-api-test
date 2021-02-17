import { Component, CSSProperties } from "react";
import Input from "./input";

interface Props {}
interface State {
  searchValue: string;
}

class App extends Component<Props, State> {
  state: State = {
    searchValue: ''
  }

  handleNewSearchValue = (value: string) => {
    this.setState({ searchValue: value });
  };
  
  render() {
    return (
      <div style={rootStyle}>
        <Input
          value={this.state.searchValue}
          onChange={this.handleNewSearchValue}
        />
        {/* <ImageGrid /> */}
      </div>
    );
  }
}

const rootStyle: CSSProperties = {
  display: 'flex',
  padding: '1rem'
};

export default App;
