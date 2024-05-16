export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (8)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <img src="/images/reactjs.jpg" width={200} />
          <div>
            <a
              className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/1234/Home"
            >
              CS1234 React JS
            </a>
            <p className="wd-dashboard-course-title">
              Full Stack software developer
            </p>
            <a href="#/Kanbas/Courses/1234/Home"> Go </a>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/images/python.jpg" width={200} />
          <div>
            <a
              className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/5001/Home"
            >
              CS5001 Intensive Foundations of CS
            </a>
            <p className="wd-dashboard-course-title">Introduction to Python</p>
            <a href="#/Kanbas/Courses/5001/Home"> Go </a>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/images/discretemath.jpg" width={200} />
          <div>
            <a
              className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/5002/Home"
            >
              CS5002 Discrete Structures
            </a>
            <p className="wd-dashboard-course-title">
              Introduction to Discrete Mathematics
            </p>
            <a href="#/Kanbas/Courses/5002/Home"> Go </a>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/images/oop.jpg" width={200} />
          <div>
            <a
              className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/5004/Home"
            >
              CS5004 Object-Oriented Design
            </a>
            <p className="wd-dashboard-course-title">
              Object-Oriented Programming
            </p>
            <a href="#/Kanbas/Courses/5004/Home"> Go </a>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/images/datastructures.jpg" width={200} />
          <div>
            <a
              className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/5008/Home"
            >
              CS5008 Data Structures
            </a>
            <p className="wd-dashboard-course-title">
              Common Data Structures and Algorithms
            </p>
            <a href="#/Kanbas/Courses/5008/Home"> Go </a>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/images/computational.jpg" width={200} />
          <div>
            <a
              className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/5350/Home"
            >
              CS5350 Computational Geometry
            </a>
            <p className="wd-dashboard-course-title">
              Geometry in applied applications
            </p>
            <a href="#/Kanbas/Courses/5350/Home"> Go </a>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/images/Algorithms.jpg" width={200} />
          <div>
            <a
              className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/5800/Home"
            >
              CS5800 Algorithms
            </a>
            <p className="wd-dashboard-course-title">Advanced Algorithms</p>
            <a href="#/Kanbas/Courses/5800/Home"> Go </a>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/images/hci.jpg" width={200} />
          <div>
            <a
              className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/5340/Home"
            >
              CS5340 Human Computer Interation
            </a>
            <p className="wd-dashboard-course-title">
              Human Computer Interation
            </p>
            <a href="#/Kanbas/Courses/5340/Home"> Go </a>
          </div>
        </div>
      </div>
    </div>
  );
}
