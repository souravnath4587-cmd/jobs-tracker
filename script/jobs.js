const jobs = [
  {
    id:1,
    company: "Mobile First Corp",
    title: "Software Engineer",
    salary: "$130,000 - $175,000",
    // applied: false,
    details: "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.",
    interview:false,
    rejected:false,

  },
  {
     id:2,
    company: "TechNova Solutions",
    title: "Frontend Developer",
    salary: "$90,000 - $120,000",
    // applied: true,
    details: "Develop responsive web applications using React and Tailwind CSS.",
    interview: false,
    rejected: false,
  },
  {
     id:3,
    company: "CloudSync Ltd",
    title: "Backend Developer",
    salary: "$110,000 - $140,000",
    // applied: false,
    details: "Build scalable APIs using Node.js and MongoDB.",
    interview: false,
    rejected: false,
  },
  {
     id:4,
    company: "AI Vision Inc",
    title: "Machine Learning Engineer",
    salary: "$140,000 - $180,000",
    // applied: false,
    details: "Work on AI models and data pipelines for real-world applications.",
    interview: false,
    rejected: false,
  },
  {
     id:5,
    company: "NextGen Apps",
    title: "React Native Developer",
    salary: "$100,000 - $135,000",
    // applied: true,
    details: "Create high-performance mobile apps for Android and iOS.",
    interview: false,
    rejected: false,
  },
  {
     id:6,
    company: "SecureNet",
    title: "Cyber Security Analyst",
    salary: "$95,000 - $125,000",
    // applied: false,
    details: "Monitor and secure enterprise systems from cyber threats.",
    interview: false,
    rejected: false,
  },
  {
     id:7,
    company: "DataFlow Systems",
    title: "Full Stack Developer",
    salary: "$120,000 - $150,000",
    // applied: true,
    details: "Work on both frontend and backend systems using MERN stack.",
    interview:  false,
    rejected: false,
  },
  {
     id:8,
    company: "BrightSoft",
    title: "UI/UX Designer",
    salary: "$85,000 - $110,000",
    // applied: false,
    details: "Design intuitive and user-friendly digital products.",
    interview: false,
    rejected: false,
  },
  {
     id:9,
    company: "CodeCraft Studio",
    title: "Junior Web Developer",
    salary: "$60,000 - $80,000",
    // applied: false,
    details: "Assist in developing and maintaining company websites.",
    interview: false,
    rejected: false,
  }
];

let currentBtn = 'all'

function renderJobs(){
  const jobsSection = document.getElementById('jobs_section');
  jobsSection.innerHTML = '';
  let filter = jobs;

  if(currentBtn === "interview"){
    filter = jobs.filter(j => j.interview);
  }

  if(currentBtn === "rejected"){
    filter = jobs.filter(j => j.rejected);
  }


  updateCounts()
  updateButton()
 

  if(filter.length === 0){
    jobsSection.innerHTML += `
            <div class="job_card flex flex-col justify-center items-center h-screen space-y-4 bg-white">
                <img src="./assests/jobs.png" alt="">
                <h1 class="text-2xl font-extrabold capitalize">No Jobs Available</h1>
                <p >Check back soon for new job opportunities</p>
            </div>
      `;
     return; 
  }

  filter.forEach( job => 
    jobsSection.innerHTML += `
      <div class="job_card p-5 bg-white rounded-2xl flex flex-col justify-start items-start gap-3">
       <div class='flex flex-row justify-between items-start w-full'>
       <div>
        <h2 class="text-xl font-bold">${job.company}</h2>
        <p class="text-sm text-gray-500">${job.title}</p>
        <p class="text-sm text-gray-500">Remote • Full-time • ${job.salary}</p>
        </div>
        <button class='p-4' onclick='{handleDelete(${job.id})}'><i class="fa-solid fa-trash-can"></i></button>
        </div>
        <div id='badge_${job.id}' class="">
          ${job.interview ? '<span class="badge badge-success p-5">Interview</span>' : ''}
          ${job.rejected ? '<span class="badge badge-error p-5">Rejected</span>' : ''}
        </div>
        <p class="text-sm text-gray-500">${job.details}</p>
        <div class="jobs_apply_btn flex flex-row gap-5">
          <button id='interview_btn' onclick="interview(${job.id})" class="btn btn-outline btn-info">Interview</button>
          <button id='rejected_btn' onclick="rejected(${job.id})" class="btn btn-outline btn-error">Rejected</button>
        </div>
      </div>
      `
    );

}


function handleDelete(id) {

  jobs.filter((item,i) =>{
    if(id == item.id){
      jobs.splice(i, 1);
      renderJobs();
    }
  } );
  
}


function interview(id){
  const job = jobs.find(job =>job.id === id);
  if(!job.interview){
    job.interview = true;
    job.rejected = false;
  }else{
    job.interview = false;
  }

  renderJobs();
}

function rejected(id){
  const job = jobs.find(job =>job.id === id);
  if(!job.rejected){
    job.rejected = true;
    job.interview = false;
  }else{
    job.interview = false;
  }
  renderJobs();
}


function selected(btn){
  currentBtn = btn;
  renderJobs();
}

function updateCounts(){
  const total = jobs.length;
  const interviewCount = jobs.filter(j => j.interview).length;
  const rejectedCount = jobs.filter(j => j.rejected).length;
  const interviewId = document.getElementById('interview_count')
  const rejectedId = document.getElementById('rejected_count')

  document.getElementById("total_count").innerText = total;
  document.getElementById("jobs_count").innerText = `${total} Jobs`;
  interviewId.innerText = interviewCount;
  interviewId.classList.add('text-info')
  rejectedId.innerText = rejectedCount;
  rejectedId.classList.add('text-error')
}

function updateButton(){
  document.querySelectorAll(".btn").forEach(t => t.classList.remove("btn-primary"));
  const total = jobs.length;
  const interviewCount = jobs.filter(j => j.interview).length;
  const rejectedCount = jobs.filter(j => j.rejected).length;

  if(currentBtn === "all"){
   document.getElementById('all_btn').classList.add('btn-primary');
   console.log('all');
   
  }
  if(currentBtn === "interview"){
    document.getElementById('interview_btn').classList.add('btn-primary');
    document.getElementById("jobs_count").innerText = `${interviewCount} of ${total} Jobs`;
    console.log('interview');
    
  }
  if(currentBtn === 'rejected'){
    document.getElementById('reject_btn').classList.add('btn-primary');
    document.getElementById("jobs_count").innerText = `${rejectedCount} of ${total} Jobs`;
   console.log('rejected');
   
  }
}

renderJobs();

