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

highestScore(students);
