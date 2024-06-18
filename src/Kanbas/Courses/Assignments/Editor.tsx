import { useParams } from "react-router";
import { Link } from "react-router-dom";
import * as db from "../../Database";
import { SlCalender } from "react-icons/sl";

export default function Editor() {
  const { cid, aid } = useParams();
  const assignments = db.assignments;

  return (
    <div id="wd-assignments-editor" className="container">
      <div className="row mb-3">
        <label htmlFor="wd-name" className="col-sm-3 col-form-label">
          <h3 style={{ whiteSpace: "nowrap" }}>Assignment Name</h3>
        </label>
        {assignments
          .filter(
            (assignment: any) =>
              assignment.course === cid && assignment._id === aid
          )
          .map((assignment: any) => (
            <input
              id="wd-name"
              className="form-control"
              value={assignment.title}
            />
          ))}
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

                  {assignments
                    .filter(
                      (assignment: any) =>
                        assignment.course === cid && assignment._id === aid
                    )
                    .map((assignment: any) => (
                      <input
                        id="wd-due-date"
                        className="form-control"
                        value={assignment.enddate}
                      />
                    ))}
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-sm-6">
                  <label htmlFor="wd-available-from" className="fw-bold">
                    Available from
                  </label>
                  {assignments
                    .filter(
                      (assignment: any) =>
                        assignment.course === cid && assignment._id === aid
                    )
                    .map((assignment: any) => (
                      <input
                        id="wd-due-date"
                        className="form-control"
                        value={assignment.startdate}
                      />
                    ))}
                </div>
                <div className="col-sm-6">
                  <label htmlFor="wd-available-until" className="fw-bold">
                    Until
                  </label>
                  {assignments
                    .filter(
                      (assignment: any) =>
                        assignment.course === cid && assignment._id === aid
                    )
                    .map((assignment: any) => (
                      <input
                        id="wd-due-date"
                        className="form-control"
                        value={assignment.enddate}
                      />
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />
      <div className="row">
        <div className="col-sm-12 text-end">
          <Link
            to={`/Kanbas/Courses/${cid}/Assignments`}
            className="btn btn-secondary me-2"
          >
            Cancel
          </Link>
          <Link
            to={`/Kanbas/Courses/${cid}/Assignments`}
            className="btn btn-danger me-2"
          >
            Save
          </Link>
        </div>
      </div>
    </div>
  );
}
