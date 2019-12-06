/*
 * action types
 */

export const SET_PLAYERS = 'SET_PLAYERS'
export const SET_PAGES = 'SET_PAGES'

/*
 * action creators
 */

export function setPlayers(squad) {
  return { type: SET_PLAYERS, squad }
}

export function setPages(pages) {
  return { type: SET_PLAYERS, pages }
}