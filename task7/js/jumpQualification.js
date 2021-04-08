const qualificationDistance = 150;

let attempts = new Array();
let qualified = false;
let averageBest = undefined;

function jump(result) {
  attempts.push(result);
}

function getQualificationResult() {
  if (attempts.length < 3) return;

  attempts.sort().reverse();
  averageBest = (attempts[0] + attempts[1] + attempts[2]) / 3;

  console.log(averageBest);
  return qualificationDistance < averageBest;
}

jump(130);
jump(170);
jump(220);
jump(130);
jump(120);
jump(180);

qualified = getQualificationResult();
console.log('Квалификация: ' + qualified);
