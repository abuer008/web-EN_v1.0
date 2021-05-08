import * as types from '../types'

export const switchLanguage = (isEnglish) => dispatch => {
    const language = isEnglish ? 'CN' : 'EN'
    dispatch({
        type: types.SWITCH_LANGUAGE,
        payload: language
    })
}
