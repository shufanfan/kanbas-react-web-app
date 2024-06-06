export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="container">
      <div className="row mb-3">
        <label htmlFor="wd-name" className="col-sm-3 col-form-label">
          <h3 style={{ whiteSpace: "nowrap" }}>Assignment Name</h3>
        </label>

        <input id="wd-name" className="form-control" value="A1" />
      </div>

      <div className="row mb-3">
        <textarea id="wd-description" className="form-control">
          The assignment is available online. Submit a link to the landing page
          of your Web application running on Netlify.
        </textarea>
      </div>

      <div className="row mb-3 ">
        <label htmlFor="wd-points" className="col-sm-3 col-form-label ">
          Points
        </label>
        <div className="col-sm-9">
          <input id="wd-points" className="form-control" value={100} />
        </div>
      </div>

      <div className="row mb-3">
        <label htmlFor="wd-group" className="col-sm-3 col-form-label">
          Assignment Group
        </label>
        <div className="col-sm-9">
          <select id="wd-group" className="form-select">
            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            <option value="QUIZZES">QUIZZES</option>
            <option value="EXAMS">EXAMS</option>
            <option value="PROJECTS">PROJECTS</option>
          </select>
        </div>
      </div>

      <div className="row mb-3">
        <label
          htmlFor="wd-display-grade-as"
          className="col-sm-3 col-form-label"
        >
          Display Grade as
        </label>
        <div className="col-sm-9">
          <select id="wd-display-grade-as" className="form-select">
            <option value="Percentage">Percentage</option>
            <option value="Letter Grades">Letter Grades</option>
          </select>
        </div>
      </div>

      <div className="row mb-3">
        <label htmlFor="wd-submission-type" className="col-sm-3 col-form-label">
          Submission Type
        </label>
        <div className="col-sm-9">
          <div className="card">
            <div className="card-body">
              <select id="wd-submission-type" className="form-select">
                <option value="Online">Online</option>
              </select>
              <div className="mt-2">
                <label className="fw-bold">Online Entry Options</label>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="check-entry"
                    id="wd-text-entry"
                  />
                  <label className="form-check-label" htmlFor="wd-text-entry">
                    Text Entry
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="check-entry"
                    id="wd-website-url"
                  />
                  <label className="form-check-label" htmlFor="wd-website-url">
                    Website URL
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="check-entry"
                    id="wd-media-recordings"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="wd-media-recordings"
                  >
                    Media Recordings
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="check-entry"
                    id="wd-student-annotation"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="wd-student-annotation"
                  >
                    Student Annotation
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="check-entry"
                    id="wd-file-upload"
                  />
                  <label className="form-check-label" htmlFor="wd-file-upload">
                    File Uploads
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-3">
        <label htmlFor="wd-assign-to" className="col-sm-3 col-form-label">
          Assign
        </label>
        <div className="col-sm-9">
          <div className="card">
            <div className="card-body">
              <div className="mb-2">
                <label htmlFor="wd-assign-to" className="fw-bold">
                  Assign to
                </label>
                <input
                  id="wd-assign-to"
                  className="form-control"
                  value="Everyone"
                />
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <label htmlFor="wd-due-date" className="fw-bold">
                    Due
                  </label>
                  <input
                    type="date"
                    id="wd-due-date"
                    className="form-control"
                    value="2024-05-22"
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-sm-6">
                  <label htmlFor="wd-available-from" className="fw-bold">
                    Available from
                  </label>
                  <input
                    type="date"
                    id="wd-available-from"
                    className="form-control"
                    value="2024-05-06"
                  />
                </div>
                <div className="col-sm-6">
                  <label htmlFor="wd-available-until" className="fw-bold">
                    Until
                  </label>
                  <input
                    type="date"
                    id="wd-available-until"
                    className="form-control"
                    value="2024-05-22"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />
      <div className="row">
        <div className="col-sm-12 text-end">
          <button className="btn btn-secondary me-2">Cancel</button>
          <button className="btn btn-danger btn-primary">Save</button>
        </div>
      </div>
    </div>
  );
}
