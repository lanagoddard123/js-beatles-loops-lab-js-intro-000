
function theBeatlesPlay(musicians, instruments) {
  var phrases = [];
  for (var i = 0; i < musicians.length; i++) {
    phrases.push(musicians[i] + " plays " + instruments[i]);
  }
  return phrases;
}

function johnLennonFacts(facts) {
  const loudFacts = []
  let i = 0
  while (i < facts.length) {
    loudFacts.push(facts[i]+'!!!')
    i++
  }
  return loudFacts
}

function iLoveTheBeatles(n){
  var n = 0
  var Newarray = []
  do{Newarray.push('I love the beatles')
  ++n
} while(n<15)
return Newarray
}
