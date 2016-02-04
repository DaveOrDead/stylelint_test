import { generateUUID } from  '../utils/utils'

import { CREATE_NEW_WORKFLOW } from '../actions/workflowbuilder'
import { initialState } from '../data/workflowbuilderconfig'



export default function WorkflowBuilder(state = initialState.WorkflowBuilder, action) {

    switch(action.type) {


        case CREATE_NEW_WORKFLOW:

            var newId = generateUUID()

            const newWorkflow = {
                id: newId,
                name: action.workflowName,
                templateId: action.templateId
            }
            console.log(newWorkflow)
            return Object.assign({}, state, { workflow: newWorkflow });

        default:
            return state;
    }
}