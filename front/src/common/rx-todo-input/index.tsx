import * as React from 'react';

export class RxTodoInput extends React.Component<{ addTodo: Function }, {}> {

    valor: HTMLInputElement

    constructor() {
        super();
    }

    handleClick() {
        this.props.addTodo(this.valor.value);
    }

    render() {
        return (
            <section>
                <input type="text" ref={input => this.valor = input } />
                <button onClick={() => this.handleClick()}>Add</button>
            </section>
        );
    }
};