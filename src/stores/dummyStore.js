import flux from 'control';
import {createStore, bind} from 'alt/utils/decorators';
import actions from 'actions/dummyActions';

@createStore(flux)
class DummyStore {
    constructor() {
        this.state = {
            name: 'awesome',
            view: '',
            apiData: 'default'
        };
    }

    @bind(actions.updateName)
    updateName(name) {
        //this.name = name;
        this.setState({name: name});
    }

    @bind(actions.updateView)
    updateView(view) {
        //this.view = view;
        this.setState({view: view});
    }

    @bind(actions.updateApiData)
    updateApiData(data) {
        //this.apiData = data.result;
        this.setState({apiData: data.result});
    }

    @bind(actions.setText)
    setText(text) {
        //this.apiData = text;
        this.setState({apiData: text});
    }
}

export default DummyStore;
