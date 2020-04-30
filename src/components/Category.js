import React, { Component } from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { connect, configure } from 'react-redux';
import { Link } from 'react-router-dom';

import Clue from './Clue';

configure({ adapter: new Adapter() });

export class Category extends Component {
  state = {
    clues: [],
  };

  componentDidMount() {
    fetch(`http://jservice.io/api/clues?category=${this.props.category.id}`)
      .then((res) => res.json())
      .then((json) => this.setState({ clues: json }));
  }

  render() {
    return (
      <div>
        <h2>{this.props.category.title}</h2>
        {this.state.clues.map((clue) => {
          return <Clue key={clue.id} clue={clue} />;
        })}
      </div>
    );
  }
}

class LinkedCategory extends Component {
  render() {
    return (
      <div>
        <Link className="link-home" to="/">
          <Category category={this.props.category} />
          <h4>Home</h4>
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { category: state.category };
}

export default connect(mapStateToProps, null)(LinkedCategory);
