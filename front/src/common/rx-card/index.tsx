import * as React from 'react';

export class RxCard extends React.Component<{}, {}> {
    constructor() {
        super();
    }

    render() {
        return (
            <section>
                <div>Hola Mundo!</div>
                <div>{this.props.children}</div>
            </section>
        );
    }
};