import flux from 'control';
import {createStore, bind} from 'alt/utils/decorators';
import actions from 'actions/dummyActions';

@createStore(flux)
class DummyStore {
    name = 'awesome';
    view = '';

    @bind(actions.updateName)
    updateName(name) {
        this.name = name;
    }

    @bind(actions.updateView)
    updateView(view) {
        this.view = view;
    }
}

export default DummyStore;
