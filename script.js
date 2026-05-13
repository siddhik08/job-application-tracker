let jobs = JSON.parse(localStorage.getItem("jobs")) || [];

function addJob() {
  let company = document.getElementById("company").value;
  let role = document.getElementById("role").value;
  let status = document.getElementById("status").value;

  if (company === "" || role === "") {
    alert("Please fill all fields");
    return;
  }

  let job = { company, role, status };
  jobs.push(job);

  localStorage.setItem("jobs", JSON.stringify(jobs));

  document.getElementById("company").value = "";
  document.getElementById("role").value = "";

  displayJobs();
}

function displayJobs() {
  let jobList = document.getElementById("jobList");
  jobList.innerHTML = "";

  jobs.forEach((job, index) => {
    let row = `<tr>
      <td>${job.company}</td>
      <td>${job.role}</td>
      <td class="${job.status.toLowerCase()}">${job.status}</td>
      <td><button onclick="deleteJob(${index})">Delete</button></td>
    </tr>`;

    jobList.innerHTML += row;
  });
}

function deleteJob(index) {
  jobs.splice(index, 1);
  localStorage.setItem("jobs", JSON.stringify(jobs));
  displayJobs();
}

// Load data on page refresh
displayJobs();