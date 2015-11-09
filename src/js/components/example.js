import React from 'react';
import connectToStores from 'alt/utils/connectToStores';
import DummyStore from 'stores/dummyStore';
import DummyActions from 'actions/dummyActions';
import Mn from 'backbone.marionette';
import rComp from 'components/rComp';
import View from 'components/view';

@connectToStores
class Example extends React.Component {

    constructor(props) {
        super(props);
    }

    static getStores() {
        return [DummyStore];
    }

    static getPropsFromStores() {
        return DummyStore.getState();
    }

    onMnClicked() {
        var view = Mn.ItemView.extend({
            template: '<h1> this is the Mn view</h1>'
        });
        DummyActions.updateView(view);
    }

    onReactClicked() {
        var view = rComp;
        DummyActions.updateView(view);
    }

    onChange = (evt) => {
        DummyActions.updateName(evt.target.value);
    };

    getTestApi() {
        DummyActions.fetchApiData();
    }

    changeText() {
        DummyActions.setText('test test');
    }

    render() {
        return (
            <div>
                <input type='text' value={this.props.name} onChange={this.onChange}/>
                <h1>It works: {this.props.name}</h1>
                <button onClick={this.onMnClicked}>Mn</button>
                <button onClick={this.onReactClicked}>React</button>
                <div className='mnView'></div>
                <View view={this.props.view}/>
                <button onClick={this.getTestApi}>GET API TEST</button>
                <button onClick={this.changeText}>change text</button>
                <div>{this.props.apiData}</div>
            </div>
        );
    }
}

export default Example;
