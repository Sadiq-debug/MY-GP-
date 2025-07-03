function addCourse() {
  const container = document.getElementById('courses-container');
  const course = document.createElement('div');
  course.className = 'course';
  course.innerHTML = `
    <select class="unit">
      <option value="3">3 units</option>
      <option value="2">2 units</option>
      <option value="1">1 unit</option>
    </select>

    <select class="grade">
      <option value="5">A</option>
      <option value="4">B</option>
      <option value="3">C</option>
      <option value="2">D</option>
      <option value="1">E</option>
      <option value="0">F</option>
    </select>

    <button onclick="removeCourse(this)" class="remove-btn">✖</button>
  `;
  container.appendChild(course);
}

function removeCourse(button) {
  button.parentElement.remove();
}

function calculateGPA() {
  const units = document.querySelectorAll('.unit');
  const grades = document.querySelectorAll('.grade');
  let totalUnits = 0;
  let totalPoints = 0;

  for (let i = 0; i < units.length; i++) {
    const unit = parseInt(units[i].value);
    const grade = parseInt(grades[i].value);
    totalUnits += unit;
    totalPoints += unit * grade;
  }

  const gpa = (totalUnits === 0) ? 0 : (totalPoints / totalUnits).toFixed(2);
  document.getElementById('result').textContent = `Your GPA: ${gpa}`;
}
