import * as React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { RxTodoInput } from '../../common/rx-todo-input';

export class Home extends React.Component<{}, {}> {
    constructor() {
        super();
    }

    addTodo(todo) {
        console.log(todo);
    }

    render() {
        return (
            <section>
                <div>Home</div>
                <RxTodoInput addTodo={valor => this.addTodo(valor)}></RxTodoInput>
            </section>
        );
    }
};