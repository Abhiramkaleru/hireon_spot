import { useState } from "react";

const jobListingsGrid = [
  { title: "System Engineer", company: "Infosys", location: "Bangalore" },
  { title: "Software Engineer", company: "Google", location: "Mountain View" },
  { title: "Data Analyst", company: "Microsoft", location: "Redmond" },
  { title: "Frontend Developer", company: "Amazon", location: "Seattle" },
];

export default function LatestJobs() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredJobs = jobListingsGrid.filter(
    (job) =>
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {/* Search Input */}
      <div className="input-group mb-4 w-50 mx-auto">
        <input
          type="text"
          className="form-control"
          placeholder="Search for jobs by title, company, or location..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            borderRadius: "8px 0 0 8px",
            background: "rgba(255,255,255,0.2)",
            color: "black",
            border: "1px solid #ccc",
          }}
        />
        <button
          className="btn"
          style={{
            background: "linear-gradient(90deg, #ff9900, #004aad)",
            color: "white",
            border: "none",
            borderRadius: "0 8px 8px 0",
          }}
        >
          🔍
        </button>
      </div>

      {/* Latest Jobs Section */}
      <section className="container-fluid py-5 bg-light">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center mb-4">
            <h2 className="fw-bold">Latest Jobs</h2>
            <p className="text-muted">Explore the most recent walk-in job postings.</p>
          </div>
          <div className="marquee-container">
            <div className="marquee">
              <div className="row g-4 px-3">
                {filteredJobs.length > 0 ? (
                  filteredJobs.map((job, index) => (
                    <div className="col-12 col-md-3 job-card" key={index}>
                      <div className="card h-100 shadow-sm">
                        <div className="card-body">
                          <h6 className="card-title">{job.title}</h6>
                          <p className="card-text small text-muted">
                            {job.company} <br /> {job.location}
                          </p>
                          <button className="btn btn-outline-primary btn-sm">
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-center text-muted">No jobs found</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
