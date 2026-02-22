const jobs = [
  {
    id:1,
    company: "Mobile First Corp",
    title: "Software Engineer",
    salary: "$130,000 - $175,000",
    applied: false,
    details: "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.",
    interview:false,
    rejected:false,

  },
  {
     id:2,
    company: "TechNova Solutions",
    title: "Frontend Developer",
    salary: "$90,000 - $120,000",
    applied: true,
    details: "Develop responsive web applications using React and Tailwind CSS.",
    interview: false,
    rejected: false,
  },
  {
     id:3,
    company: "CloudSync Ltd",
    title: "Backend Developer",
    salary: "$110,000 - $140,000",
    applied: false,
    details: "Build scalable APIs using Node.js and MongoDB.",
    interview: false,
    rejected: false,
  },
  {
     id:4,
    company: "AI Vision Inc",
    title: "Machine Learning Engineer",
    salary: "$140,000 - $180,000",
    applied: false,
    details: "Work on AI models and data pipelines for real-world applications.",
    interview: false,
    rejected: false,
  },
  {
     id:5,
    company: "NextGen Apps",
    title: "React Native Developer",
    salary: "$100,000 - $135,000",
    applied: true,
    details: "Create high-performance mobile apps for Android and iOS.",
    interview: false,
    rejected: false,
  },
  {
     id:6,
    company: "SecureNet",
    title: "Cyber Security Analyst",
    salary: "$95,000 - $125,000",
    applied: false,
    details: "Monitor and secure enterprise systems from cyber threats.",
    interview: false,
    rejected: false,
  },
  {
     id:7,
    company: "DataFlow Systems",
    title: "Full Stack Developer",
    salary: "$120,000 - $150,000",
    applied: true,
    details: "Work on both frontend and backend systems using MERN stack.",
    interview:  false,
    rejected: false,
  },
  {
     id:8,
    company: "BrightSoft",
    title: "UI/UX Designer",
    salary: "$85,000 - $110,000",
    applied: false,
    details: "Design intuitive and user-friendly digital products.",
    interview: false,
    rejected: false,
  },
  {
     id:9,
    company: "CodeCraft Studio",
    title: "Junior Web Developer",
    salary: "$60,000 - $80,000",
    applied: false,
    details: "Assist in developing and maintaining company websites.",
    interview: false,
    rejected: false,
  }
];


document.getElementById('jobs_section').innerHTML = jobs.map(job => `
  <div class="job_card p-5 bg-white rounded-2xl flex flex-col justify-start items-start gap-3">
    <h2 class="text-xl font-bold">${job.company}</h2>
    <p class="text-sm text-gray-500">${job.title}</p>
    <p class="text-sm text-gray-500">Remote • Full-time • ${job.salary}</p>
    <div id='badge_${job.id}' class="badge badge-soft badge-primary p-4 uppercase"><span>Not Applied</span>
    </div>
    <p class="text-sm text-gray-500">${job.details}</p>
    <div class="jobs_apply_btn flex flex-row gap-5">
      <button id='interview_btn' onclick="interview(${job.id})" class="btn btn-outline btn-info">Interview</button>
      <button id='rejected_btn' onclick="rejected(${job.id})" class="btn btn-outline btn-error">Rejected</button>
    </div>
  </div>
`).join('');

function interview(jobId) {

  // for interview selection -------------->
  const badge =  document.getElementById('badge_' + jobId);  
  const interviewCount = document.getElementById('interview_count');
  const rejectedCount = document.getElementById('rejected_count');
  jobs.forEach(job => {
    if (job.id === jobId) {
      job.interview = true;
      job.rejected = false;
      // Update interview count ---------------->
      const totalInterviews = jobs.filter(job => job.interview).length;
      interviewCount.innerText = totalInterviews;
      // Update rejected count ---------------->
      const totalRejected = jobs.filter(job => job.rejected).length;
      rejectedCount.innerText = totalRejected;

    }  
  });
  for (let job of jobs) {
      if (job.id === jobId && job.interview) {
        // badge color change ---------------->
        badge.innerText = "Interview";
        badge.classList.remove('badge-primary');
        badge.classList.remove('badge-error');
        badge.classList.add('badge-info');
      }      
      
  } 
 

};
function rejected(jobId) {
  // for rejection --------------------------->
  const badge =  document.getElementById('badge_' + jobId);  
  const rejectedCount = document.getElementById('rejected_count');
  const interviewCount = document.getElementById('interview_count');
  jobs.forEach(job => {
    if (job.id === jobId) {
      job.rejected = true;
      job.interview = false;
      // Update rejected count ---------------->
    const totalRejected = jobs.filter(job => job.rejected).length;
    rejectedCount.innerText = totalRejected;
      // Update interview count ---------------->
    const totalInterviews = jobs.filter(job => job.interview).length;
    interviewCount.innerText = totalInterviews;
    }  
  });
  for (let job of jobs) {
    if (job.id === jobId && job.rejected) {
      // badge color change ---------------->
      badge.innerText = "Rejected";
       badge.classList.remove('badge-primary');
       badge.classList.remove('badge-info');
      badge.classList.add('badge-error');
    }
     
  } 
  
};




// for total jobs count ---------------->
document.getElementById('jobs_count').textContent = jobs.length + " Jobs";
document.getElementById('total_count').textContent = jobs.length;
