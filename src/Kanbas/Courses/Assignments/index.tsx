import AssignmentsControls from "./AssignmentsControls";
import { BsGripVertical } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { TbTriangleInvertedFilled } from "react-icons/tb";
import { GiNotebook } from "react-icons/gi";
import { FaPlus } from "react-icons/fa";
export default function Assignments() {
  return (
    <div id="wd-assignments" className="container ">
      <div className="row col-12 px-0">
        <AssignmentsControls />
      </div>
      <div className="my-5"></div>

      <div className="row col-12 px-0">
        <div className="container table-responsive ">
          <ul id="wd-assignment-list" className="list-group rounded-0">
            <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
              <div className="wd-title p-3 ps-2 bg-light d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <BsGripVertical className="fs-3 me-2" />
                  <TbTriangleInvertedFilled className="fs-6 me-2" />
                  <h3 id="wd-assignments-title">
                    <b>ASSIGNMENTS</b>
                  </h3>
                </div>
                <div className="d-flex align-items-center float-end">
                  <button className="btn btn-md me-1 btn-secondary bg-light">
                    40% of Total
                  </button>
                  <button className="btn btn-md me-2 btn-secondary bg-light">
                    <FaPlus />
                  </button>
                  <IoEllipsisVertical className="fs-3" />
                </div>
              </div>

              <ul className="wd-assignments list-group rounded-0 border-start border-5 border-success">
                <li className="wd-assignment-list-item list-group-item p-3 ps-1 ">
                  <div className="d-flex align-items-center justify-content-between w-100">
                    <div className="d-flex align-items-center">
                      <BsGripVertical className="me-4 fs-3" />
                      <GiNotebook
                        className="me-4 fs-4"
                        style={{ color: "green" }}
                      />
                      <div>
                        <a
                          className="wd-assignment-link"
                          href="#/Kanbas/Courses/1234/Assignments/123"
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          <b>A1</b>
                        </a>
                        <br />
                        <span style={{ color: "red" }}>Multiple Modules</span> |
                        <b>Not available until</b> May 6 at 12:00am |
                        <br />
                        <b>Due</b> May 13 at 11:59pm | 100 pts
                      </div>
                    </div>
                    <div>
                      <LessonControlButtons />
                    </div>
                  </div>
                </li>

                <li className="wd-assignment-list-item  list-group-item p-3 ps-1">
                  <div className="d-flex align-items-center justify-content-between w-100">
                    <div className="d-flex align-items-center">
                      <BsGripVertical className="me-4 fs-3" />
                      <GiNotebook
                        className="me-4 fs-4"
                        style={{ color: "green" }}
                      />
                      <div>
                        <a
                          className="wd-assignment-link"
                          href="#/Kanbas/Courses/1234/Assignments/123"
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          <b>A2</b>
                        </a>
                        <br />
                        <span style={{ color: "red" }}>Multiple Modules</span> |
                        <b>Not available until</b> May 13 at 12:00am |
                        <br />
                        <b>Due</b> May 20 at 11:59pm | 100 pts
                      </div>
                    </div>
                    <div>
                      <LessonControlButtons />
                    </div>
                  </div>
                </li>
                <li className="wd-assignment-list-item  list-group-item p-3 ps-1">
                  <div className="d-flex align-items-center justify-content-between w-100">
                    <div className="d-flex align-items-center">
                      <BsGripVertical className="me-4 fs-3" />
                      <GiNotebook
                        className="me-4 fs-4"
                        style={{ color: "green" }}
                      />
                      <div>
                        <a
                          className="wd-assignment-link"
                          href="#/Kanbas/Courses/1234/Assignments/123"
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          <b>A3</b>
                        </a>
                        <br />
                        <span style={{ color: "red" }}>Multiple Modules</span> |
                        <b>Not available until</b> May 20 at 12:00am |
                        <br />
                        <b>Due</b> May 27 at 11:59pm | 100 pts
                      </div>
                    </div>
                    <div>
                      <LessonControlButtons />
                    </div>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
