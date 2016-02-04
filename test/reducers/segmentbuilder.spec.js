import expect from 'expect'
import WorkflowBuilder from '../../reducers/WorkflowBuilder'
import { ADD_RULE } from '../../actions/WorkflowBuilder'
import { initialState } from '../../data/WorkflowBuilderconfig'

describe('reducers', () => {
  describe('WorkflowBuilder', () => {
    it('should handle initial state', () => {
      expect(WorkflowBuilder(undefined, {})).toBe(initialState)
    })

    it('should handle ADD_RULE', () => {
      let addRuleAction =  {
        type: ADD_RULE,
         ruleGroupIndex: 0
       }
       let expectedRulesForFirstGroup = {
            Rules : [
                {
                    id: '0',
                    ruleTypeId: 'default',
                    ruleQualifierId: null,
                    ruleCriteria: '',
                    ruleGroupIndex: 0
                }
            ]
       }
       expect(WorkflowBuilder(initialState, addRuleAction).RuleGroups[0]).toEqual(expectedRulesForFirstGroup)
    })
  })
})