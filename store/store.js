import { createStore, applyMiddleware, combineReducers } from 'redux';
import { HYDRATE, createWrapper } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';
import trade from './trade/reducer';

const combinedReducer = combineReducers({
	trade
})

const masterReducer = (state, action) => {
	if (action.type === HYDRATE) {
		const nextState = {
			...state,
			trade: {
				...state.trade,
				...action.payload.trade,
			}
		}
		return nextState
	} else {
		return combinedReducer(state, action)
	}
}

const initStore = () => {
	return createStore(masterReducer, composeWithDevTools(
		applyMiddleware()
	))
}

export const wrapper = createWrapper(initStore)
