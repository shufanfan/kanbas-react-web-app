export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (8)</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card" style={{ width: "260px" }}>
              <img src="/images/reactjs.jpg" height={130} />
              <div className="card-body">
                <a
                  className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/1234/Home"
                  style={{
                    textDecoration: "none",
                    color: "navy",
                    fontWeight: "bold",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "flex",
                    width: "100%",
                  }}
                >
                  CS1234 React JS
                </a>
                <p
                  className="wd-dashboard-course-title card-text"
                  style={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  Full Stack software developer
                </p>
                <a
                  href="#/Kanbas/Courses/1234/Home"
                  className="btn btn-primary"
                  style={{
                    width: "60px",
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Go
                </a>
              </div>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card " style={{ width: "260px" }}>
              <img src="/images/python.jpg" height={130} />
              <div className="card-body">
                <a
                  className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/5001/Home"
                  style={{
                    textDecoration: "none",
                    color: "navy",
                    fontWeight: "bold",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "flex",
                    width: "100%",
                  }}
                >
                  CS5001 Intensive Foundations of CS
                </a>
                <p
                  className="wd-dashboard-course-title card-text"
                  style={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  Introduction to Python
                </p>
                <a
                  href="#/Kanbas/Courses/5001/Home"
                  className="btn btn-primary"
                  style={{
                    width: "60px",
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Go
                </a>
              </div>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card" style={{ width: "260px" }}>
              <img src="/images/discretemath.jpg" height={130} />
              <div className="card-body">
                <a
                  className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/5002/Home"
                  style={{
                    textDecoration: "none",
                    color: "navy",
                    fontWeight: "bold",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "flex",
                    width: "100%",
                  }}
                >
                  CS5002 Discrete Structures
                </a>
                <p
                  className="wd-dashboard-course-title card-text"
                  style={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  Introduction to Discrete Mathematics
                </p>
                <a
                  href="#/Kanbas/Courses/5002/Home"
                  className="btn btn-primary"
                  style={{
                    width: "60px",
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Go
                </a>
              </div>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card" style={{ width: "260px" }}>
              <img src="/images/oop.jpg" height={130} />
              <div className="card-body">
                <a
                  className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/5004/Home"
                  style={{
                    textDecoration: "none",
                    color: "navy",
                    fontWeight: "bold",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "flex",
                    width: "100%",
                  }}
                >
                  CS5004 Object-Oriented Design
                </a>
                <p
                  className="wd-dashboard-course-title card-text"
                  style={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  Object-Oriented Programming
                </p>
                <a
                  href="#/Kanbas/Courses/5004/Home"
                  className="btn btn-primary"
                  style={{
                    width: "60px",
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Go
                </a>
              </div>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card" style={{ width: "260px" }}>
              <img src="/images/datastructures.jpg" height={130} />
              <div className="card-body">
                <a
                  className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/5008/Home"
                  style={{
                    textDecoration: "none",
                    color: "navy",
                    fontWeight: "bold",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "flex",
                    width: "100%",
                  }}
                >
                  CS5008 Data Structures
                </a>
                <p
                  className="wd-dashboard-course-title card-text"
                  style={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  Common Data Structures and Algorithms
                </p>
                <a
                  href="#/Kanbas/Courses/5008/Home"
                  className="btn btn-primary"
                  style={{
                    width: "60px",
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Go
                </a>
              </div>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card" style={{ width: "260px" }}>
              <img src="/images/computational.jpg" height={130} />
              <div className="card-body">
                <a
                  className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/5350/Home"
                  style={{
                    textDecoration: "none",
                    color: "navy",
                    fontWeight: "bold",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "flex",
                    width: "100%",
                  }}
                >
                  CS5350 Computational Geometry
                </a>
                <p
                  className="wd-dashboard-course-title card-text"
                  style={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  Geometry in applied applications
                </p>
                <a
                  href="#/Kanbas/Courses/5350/Home"
                  className="btn btn-primary"
                  style={{
                    width: "60px",
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Go
                </a>
              </div>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card" style={{ width: "260px" }}>
              <img src="/images/Algorithms.jpg" height={130} />
              <div className="card-body">
                <a
                  className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/5800/Home"
                  style={{
                    textDecoration: "none",
                    color: "navy",
                    fontWeight: "bold",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "flex",
                    width: "100%",
                  }}
                >
                  CS5800 Algorithms
                </a>
                <p
                  className="wd-dashboard-course-title card-text"
                  style={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  Advanced Algorithms
                </p>
                <a
                  href="#/Kanbas/Courses/5800/Home"
                  className="btn btn-primary"
                  style={{
                    width: "60px",
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Go
                </a>
              </div>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card" style={{ width: "260px" }}>
              <img src="/images/hci.jpg" height={130} />
              <div className="card-body">
                <a
                  className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/5340/Home"
                  style={{
                    textDecoration: "none",
                    color: "navy",
                    fontWeight: "bold",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "flex",
                    width: "100%",
                  }}
                >
                  CS5340 Human Computer Interation
                </a>
                <p
                  className="wd-dashboard-course-title card-text"
                  style={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  Human Computer Interation
                </p>
                <a
                  href="#/Kanbas/Courses/5340/Home"
                  className="btn btn-primary"
                  style={{
                    width: "60px",
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Go
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
