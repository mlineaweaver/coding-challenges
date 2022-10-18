str = "This is a fake paragraph. I don't really know what to talk about in it. Eagles beat Dallas. Go Birds."
sub = "talk"
notsub = "poop"

// stringContainsString returns true if the first string contains the second one
function stringContainsString(string, substring){
  console.log("unimplemented")
}

console.log("This should return true: "+stringContainsString(str,sub))
console.log("This should return false: "+stringContainsString(str,notsub))


str = "This is a paragraph again. I need to use a word a bunch of times so poop poop poop poop poop. Poop should appear six times!"

// mostUsedWord returns the word that appears the most
// This should be case insensitive and punctionation should be ignored
function mostUsedWord(str) {
  console.log("unimplemented")
}

console.log("This should return poop: "+mostUsedWord(str))
