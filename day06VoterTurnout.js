const voterTurnout = (voter_signatures, voter_ids) => {
  if (voter_signatures.length != voter_ids.length)
     return false
  for (i = 0; i< voter_ids.length; i++) {
    if (voter_signatures[i] != voter_ids[i])
    return "FRAUD!"
  }
  return "All clear, we can count the votes!"
}
