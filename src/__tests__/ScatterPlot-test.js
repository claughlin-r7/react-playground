import React from 'react/addons';
const TestUtils = React.addons.TestUtils;
import expect from 'expect';
import ScatterPlot from 'components/ScatterPlot';

describe('ScatterPlot', function () {

    it("renders an h1", function (){
        var scatterplot = TestUtils.renderIntoDocument(
            <ScatterPlot />
        );

        var h1 = TestUtils.findRenderedDOMComponentWithTag(
            scatterplot, 'h1'
        );

        expect(h1.getDOMNode().textContent).toEqual("This is a random scatterplot");
    });

});
