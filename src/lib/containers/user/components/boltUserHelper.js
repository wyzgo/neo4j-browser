import bolt from '../../../../services/bolt/bolt'

function callProcedure (query, callback) {
  bolt.transaction(query).then((r) => {
    return callback(r)
  })
}

export function getListOfUsersWithRole (callBack) {
  return callProcedure('CALL dbms.listUsers', callBack)
}
export function getListOfRolesWithUsers (callBack) {
  return callProcedure('CALL dbms.listRoles YIELD role', callBack)
}
export function createDatabaseUser ({username, password, forcePasswordChange}, callBack) {
  return callProcedure(`CALL dbms.createUser("${username}", "${password}", ${forcePasswordChange})`, callBack)
}
export function deleteUser (username, callBack) {
  return callProcedure(`CALL dbms.deleteUser("${username}")`, callBack)
}
export function addUserToRole (username, roles, callBack) {
  return callProcedure(`CALL dbms.addUserToRole("${username}", "${roles}")`, callBack)
}
