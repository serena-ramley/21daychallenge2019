const registerToVote = (name, unregisteredVoters) => {
  return unregisteredVoters.filter(nameOnList => name != nameOnList);
}
