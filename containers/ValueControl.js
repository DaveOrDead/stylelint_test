import Textbox from '../components/Textbox'
import Search from '../components/Search'
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as workflowBuilderActions from '../actions/workflowbuilder'
import { bindActionCreators } from 'redux'


function mapStateToProps(state) {
    return {
        ruleTypes: state.ruleTypes,
        ruleQualifiersForType: state.ruleQualifiersForType
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(workflowBuilderActions, dispatch)
    }
}


class ValueControl extends Component {

    render() {

        const { rule, ruleTypes, ruleQualifiersForType, actions, valueControlType } = this.props;

        return (
                <span>
                    <Textbox value={rule.ruleCriteria} isHidden={ valueControlType !== 'textField'} />
                    <Search isHidden={ valueControlType !== 'vicinitySelector'} />
                </span>
        )
    }
}

ValueControl.propTypes = {
    rule: PropTypes.shape({
        ruleTypeId: PropTypes.string.isRequired,
        ruleQualifierId: PropTypes.string,
        ruleCriteria: PropTypes.any
    }).isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(ValueControl);
