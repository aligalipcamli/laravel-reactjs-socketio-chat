import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Example extends Component {
    render() {
        return (
            <div className="box box-primary">
                <div className="box-header with-border">
                    <h3 className="box-title">Example Component</h3>
                    <div className="box-tools pull-right">
                        <button type="button" className="btn btn-box-tool" data-widget="collapse">
                          <i className="fa fa-minus"></i>
                        </button>
                    </div>
                </div>
                <div className="box-body">
                    I'm an example component!
                </div>
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
