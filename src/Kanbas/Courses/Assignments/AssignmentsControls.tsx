import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { addAssignment } from "./reducer";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function AssignmentsControls() {
  const dispatch = useDispatch();
  const { cid, id } = useParams();
  return (
    <div
      id="wd-assignments-controls"
      className=" d-flex justify-content-between align-items-center mt-4"
    >
      <div style={{ position: "relative", width: "100%", maxWidth: "400px" }}>
        <FaSearch
          style={{
            position: "absolute",
            left: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            color: "black",
            fontSize: "20px",
          }}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Search for Assignment"
          style={{ paddingLeft: "45px" }}
        />
      </div>

      <div className="d-flex align-items-center">
        <button
          id="wd-add-assignment-group"
          className="btn btn-md me-3 btn-secondary "
        >
          <FaPlus /> Group
        </button>

        <Link
          key={`${cid}/new`}
          to={`${cid}/new`}
          id="wd-add-assignment-btn"
          className="btn btn-md btn-danger"
        >
          <FaPlus />
          Assignment
        </Link>
      </div>
    </div>
  );
}
