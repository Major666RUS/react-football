/*
 * action types
 */

export const SET_TEAMS = 'SET_TEAMS'

/*
 * action creators
 */

export function setTeams(teams) {
  return { type: SET_TEAMS, teams }
}
