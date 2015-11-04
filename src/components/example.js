import React from 'react';
import connectToStores from 'alt/utils/connectToStores';
import DummyStore from 'stores/dummyStore';
import DummyActions from 'actions/dummyActions';
import Mn from 'backbone.marionette'
import rComp from 'components/rComp';
import View from 'components/view';

@connectToStores
class Example extends React.Component {
    displayName = 'Exampple';
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            view: ''
        };

        this.onMnClicked = this.onMnClicked.bind(this);
        this.onReactClicked = this.onReactClicked.bind(this);
    }

    static getStores(props) {
        return [DummyStore];
    }

    static getPropsFromStores(props) {
        return DummyStore.getState();
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.name} onChange={this.onChange}/>
                <h1>It works: {this.props.name}</h1>
                <button onClick={this.onMnClicked}>Mn</button>
                <button onClick={this.onReactClicked}>React</button>
                <div className="mnView"></div>
                <View view={this.state.view}/>
            </div>
        );
    }

    onMnClicked() {
        var view = Mn.ItemView.extend({
            template: '<h1> this is the Mn view</h1>'
        });
        this.setState({view: view});
        DummyActions.updateView(view);
    }

    onReactClicked() {
        var view = rComp;
        this.setState({view: view});
        DummyActions.updateView(view);
    }

    onChange = evt => {
        this.setState({name: evt.target.value});
        DummyActions.updateName(evt.target.value);
    }
}

export default Example;
