import flux from 'control';
import {createActions} from 'alt/utils/decorators';
import $ from 'jquery';

@createActions(flux)
class DummyActions {
    constructor() {
        this.generateActions('updateName');
        this.generateActions('updateView');
        this.generateActions('updateApiData');
        this.generateActions('setText');
    }

    fetchApiData() {
        this.dispatch();
        $.getJSON('api/1/test/test', (data) => {
            this.actions.updateName(data.result);
            this.actions.updateApiData(data);
        });
    }
}

export default DummyActions;
