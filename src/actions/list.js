/*
 * action types
 */

export const SET_TEAMS = 'SET_TEAMS'

/*
 * action creators
 */

export function setTeams(text) {
  return { type: SET_TEAMS, text }
}
