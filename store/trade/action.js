export const tradeActionTypes = {
	GET_MARKET: 'GET_MARKET',
	GET_MARKET_ERROR: 'GET_MARKET_ERROR',
	RESET_TRADE: 'RESET_TRADE',
	UPDATE_TRADE: 'UPDATE_TRADE',
	SET_FIRST_TRADER: 'SET_FIRST_TRADER',
	SET_SECOND_TRADER: 'SET_SECOND_TRADER',
}

// Organize files
// A bit of Styling
// Do TDD with NodeJS

export const setTrader = (number, data)  => {
	return {
		type: number === '1' 
			? tradeActionTypes.SET_FIRST_TRADER 
			: tradeActionTypes.SET_SECOND_TRADER,
		data
	}
}

export const getMarketError = (e) => {
	return {
		type: tradeActionTypes.GET_MARKET_ERROR,
	}
}

export const getMarket = (data) => {
	return {
		type: tradeActionTypes.GET_MARKET,
		data
	}
}

export const resetTrade = () => {
	return {
		type: tradeActionTypes.RESET_TRADE,
	}
}

export const updateTrade = (operation, item, trader) => {
	return {
		type: tradeActionTypes.UPDATE_TRADE,
		operation,
		item,
		trader
	}
}