import React from 'react';
import Mn from 'backbone.marionette';

class View extends React.Component {
    mnView = {};
    element = null;

    componentWillUnmount() {
        if (Mn.ItemView.prototype.isPrototypeOf(this.props.view.prototype)) {
            this.mnView.trigger('destroy');
        }
    }

    render() {
        if (Mn.ItemView.prototype.isPrototypeOf(this.props.view.prototype)) {
            return <div ref={(c) => {
                        this.element = React.findDOMNode(c);
                        if (Mn.ItemView.prototype.isPrototypeOf(this.props.view.prototype)) {
                            this.mnView = new this.props.view({el: this.element});
                            this.mnView.render();
                        }
                    }}/>;
        } else if (this.props.view !== '') {
            return <this.props.view></this.props.view>;
        } else {
            return <div>test</div>;
        }
    }
}

export default View;
