import React, { Component } from 'react';

import Header from './Header';
import CardList from './CardList';
import Scroll from './Scroll';
import ErrorBoundary from './ErrorBoundary';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      term: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ robots: users }));
  }

  onSearchChange = event => {
    this.setState({
      term: event.target.value
    });
  };

  render() {
    const { robots, term } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(term.toLowerCase());
    });
    if (!robots.length) {
      return <h1 className="tc">Loading . . .</h1>;
    }
    return (
      <div className="tc">
        <Header search={this.onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots} term={term} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default App;
