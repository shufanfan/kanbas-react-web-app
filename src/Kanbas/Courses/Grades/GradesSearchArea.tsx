import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { CiFilter } from "react-icons/ci";

export default function GradesSearchArea() {
  return (
    <div id="wd-grades-search-area" className="container mb-3">
      <div className="row mb-2">
        <div className="col-md-6">
          <label htmlFor="wd-search-student" className=" mb-2">
            <b>Student Names</b>
          </label>
          <div className="input-group" style={{ position: "relative" }}>
            <FaSearch
              style={{
                position: "absolute",
                left: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 3,
                color: "black",
              }}
            />
            <input
              type="text"
              id="wd-search-student"
              className="form-control"
              placeholder="Search Students"
              style={{ paddingLeft: "40px" }}
            />
            <IoIosArrowDown
              style={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "gray",
              }}
            />
          </div>
        </div>
        <div className="col-md-6">
          <label htmlFor="wd-search-assignment" className=" mb-2">
            <b>Assignment Names</b>
          </label>
          <div className="input-group" style={{ position: "relative" }}>
            <FaSearch
              style={{
                position: "absolute",
                left: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 3,
                color: "black",
              }}
            />

            <input
              type="text"
              id="wd-search-student"
              className="form-control"
              placeholder="Search Assignments"
              style={{ paddingLeft: "40px" }}
            />
            <IoIosArrowDown
              style={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "gray",
              }}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <button className="btn btn-light">
            <CiFilter className="me-1" />
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
}
