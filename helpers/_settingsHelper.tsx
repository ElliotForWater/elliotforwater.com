export function updateSearchCounter (setUserContext) {
  return setUserContext((prev) => {
    const userObj = {
      ...prev,
      numOfSearches: Number(prev.numOfSearches) + 1,
    }

    return userObj
  })
}
