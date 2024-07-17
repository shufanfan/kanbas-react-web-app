import AssignmentsControls from "./AssignmentsControls";
import { BsGripVertical } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import { TbTriangleInvertedFilled } from "react-icons/tb";
import { GiNotebook } from "react-icons/gi";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import React, { useState, useEffect } from "react";
import { setAssignments, deleteAssignment } from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import AssignmentControlButtons from "./AssignmentControlButtons";
import * as client from "./client";

export default function Assignments() {
  const { cid } = useParams();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const dispatch = useDispatch();

  const fetchAssignments = async () => {
    const assignments = await client.findAssignmentsForCourse(cid as string);
    dispatch(setAssignments(assignments));
  };

  const removeAssignment = async (assignmentId: string) => {
    await client.deleteAssignment(assignmentId);
    dispatch(deleteAssignment(assignmentId));
  };

  useEffect(() => {
    fetchAssignments();
  }, []);

  return (
    <div id="wd-assignments" className="container ">
      <div className="row col-12 px-0">
        <AssignmentsControls />
      </div>
      <div className="my-5"></div>

      <div className="row col-12 px-0">
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
              {assignments
                .filter((assignment: any) => assignment.course === cid)
                .map((assignment: any) => (
                  <li
                    key={assignment._id}
                    className="wd-assignment-list-item list-group-item p-3 ps-1"
                  >
                    <div className="d-flex align-items-center justify-content-between w-100">
                      <div className="d-flex align-items-center">
                        <BsGripVertical className="me-4 fs-3" />
                        <GiNotebook
                          className="me-4 fs-4"
                          style={{ color: "green" }}
                        />
                        <div>
                          <Link
                            to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                            className="wd-assignment-link "
                            style={{ textDecoration: "none", color: "black" }}
                          >
                            <b>{assignment.title}</b>
                          </Link>
                          <br />
                          <span style={{ color: "red" }}>Multiple Modules</span>
                          &nbsp; |&nbsp;<b>Not available until</b>&nbsp;
                          {assignment.startdate} |
                          <br />
                          <b>Due</b>&nbsp;
                          {assignment.enddate} | 100 pts
                        </div>
                      </div>
                      <div className="col-auto">
                        <AssignmentControlButtons
                          assignmentId={assignment._id}
                          deleteAssignment={(assignmentId) => {
                            removeAssignment(assignmentId);
                          }}
                        />
                      </div>
                    </div>
                  </li>
                ))}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
