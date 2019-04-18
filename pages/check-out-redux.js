import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTodos } from '../actions/todos';

// components
import TodoCard from '../components/TodoCard';

class CkeckOut extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getTodos());
  }

  render() {
    const { todos } = this.props;
    const todosList = todos || [];

    return (
      <div>
        <h1>Fetched todos</h1>
        <div>
          {todosList.slice(0, 5).map(card => (
            <TodoCard key={card.id} title={card.title} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos.data
});

export default connect(mapStateToProps)(CkeckOut);
