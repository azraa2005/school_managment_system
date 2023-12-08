function showHome() {
    document.getElementById('content').innerHTML = `
      <h2>Welcome to the LMS!</h2>
      <p>This is the home page content.</p>
    `;
  }

  function showClasses() {
    document.getElementById('content').innerHTML = `
      <div class="row">
        <div class="col-md-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Class 1</h5>
              <p class="card-text">Description for Class 1.</p>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Class 2</h5>
              <p class="card-text">Description for Class 2.</p>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function showStudents() {
    document.getElementById('content').innerHTML = `
      <h2>Welcome to the Students page!</h2>
      <p>This is the students page content.</p>
    `;
  }
  showStudents()

  function showTeachers() {
    document.getElementById('content').innerHTML = `
      <h2>Welcome to the Teachers page!</h2>
      <p>This is the teachers page content.</p>
    `;
  }