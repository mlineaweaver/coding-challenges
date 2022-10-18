student = { name: "Josh", score: "99" };
student2 = { name: "Rick", score: "64" };

students = [student, student2];

// Which student had the highest score?
function highestScore(students) {
  hs = 0;
  person = "";
  for (i = 0; i < students.length; i++) {
    student = students[i];
    if (student["score"] > hs) {
      hs = student["score"];
      person = student["name"];
    }
  }

  console.log(person + " " + hs);
}

//highestScore(students);

str = "abcddgggggggggbacaaa";

// Which character occures the most in the provided string
function mostCharOccurence(str) {
  strArr = str.split("");
  dic = {};

  count = 0;
  letter = "";

  for (i = 0; i < strArr.length; i++) {
    c = strArr[i];
    if (c in dic) {
      dic[c] += 1;
    } else {
      dic[c] = 1;
    }

    if (dic[c] > count) {
      count = dic[c];
      letter = c;
    }
  }

  console.log("The most used char is: " + letter);
}

mostCharOccurence(str);

str = "246";

// Sum up all the numbers in the string
function addUpTheString(str) {
  strArr = str.split("");

  runningTotal = 0;

  for (i = 0; i < strArr.length; i++) {
    number = parseInt(strArr[i]);
    runningTotal = number + runningTotal;
  }
  console.log(runningTotal);
}

addUpTheString(str);
