import { tradeActionTypes } from './action'

const tradeInitialState = {
	firstTrader: null,
	secondTrader: null,
	trade: {
		firstTrader: {
			water: 0,
			food: 0,
			medication: 0,
			ammunition: 0,
			totalPoints: 0,
		},
		secondTrader: {
			water: 0,
			food: 0,
			medication: 0,
			ammunition: 0,
			totalPoints: 0,
		},
	},
	market: {
		water: 0,
		food: 0,
		medication: 0,
		ammunition: 0,
	}
}

export default function reducer(state = tradeInitialState, action) {
	switch (action.type) {
		case tradeActionTypes.SET_FIRST_TRADER: {
			return {
				...state,
				firstTrader: action.data
			}
		}
		case tradeActionTypes.SET_SECOND_TRADER: {
			return {
				...state,
				secondTrader: action.data
			}
		}
		case tradeActionTypes.GET_MARKET:
			return {
				...state,
				market: {
					...action.data
				}
			}
		default:
			return state
	}
}