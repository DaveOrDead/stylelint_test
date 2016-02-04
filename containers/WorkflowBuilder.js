import Button   from '../components/button/Button'
import IconButton   from '../components/icon-button/IconButton'


import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as workflowBuilderActions from '../actions/workflowbuilder'
import { bindActionCreators } from 'redux'


function mapStateToProps(state) {

    return {
        workflowBuilder: state.WorkflowBuilder
    };
}


function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(workflowBuilderActions, dispatch)
    }
}

function zoomWorkflow(multiplier){

    var zoom = document.getElementsByClassName('zoom-div')[0];
    if (zoom.style.fontSize == "") {
    zoom.style.fontSize = "1.0em";
  }
    zoom.style.fontSize = parseFloat(zoom.style.fontSize) + (multiplier * 0.2) + "em";
}


class WorkflowBuilder extends Component {

    render() {

        const { ruleGroups, actions, ruleTypes } = this.props;

        return (

            <div className="l-container">

                <aside className="l-sidebar">

                    <Button text="Start from scratch" classList="c-button" handleClick={ () => actions.createNewWorkflow() }></Button>

                    <br/><br/><br/><br/><br/><br/>

                    <IconButton text="+" classList="c-icon-button" handleClick={ () => zoomWorkflow(1) }></IconButton>

                    <IconButton text="-" classList="c-icon-button" handleClick={ () => zoomWorkflow(-1) }></IconButton>

                </aside>

                <main className="l-main">

                    <div className="zoom-div" fontSize="1em">

                        <p>I am the main content</p>

                        <Button text="Test Button" classList="c-button" handleClick={ () => actions.createNewWorkflow() }></Button>

                    </div>

                </main>
            </div>
        )
    }
}

WorkflowBuilder.propTypes = {
    // ruleGroups: PropTypes.array.isRequired,
    // actions: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkflowBuilder);
