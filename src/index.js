import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Anagrams</h1>
<div>
  This code solve the anagrams comparison given two strings.
 </div>
`;

const areAnagrams = (s1, s2) => {
  if (s1.length !== s2.length) {
    return false;
  }
  let freq1 = {};
  let freq2 = {};

  for (let i in s1) {
    if (freq1.hasOwnProperty(s1[i])) freq1[s1[i]] += 1;
    else freq1[s1[i]] = 1;
  }
  for (let i in s2) {
    if (freq2.hasOwnProperty(s2[i])) freq2[s2[i]] += 1;
    else freq2[s2[i]] = 1;
  }
  console.log(freq1);
  console.log(freq2);
  for (let key in freq1) {
    if (!freq2.hasOwnProperty(key) || freq1[key] !== freq2[key]) return false;
  }
  return true;
};

console.log(areAnagrams("danger", "garden"));
