import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";
import { BsGripVertical } from "react-icons/bs";
import ModulesControlButtons from "./ModulesControlButtons";

export default function Modules() {
  return (
    <div id="wd-modules" className="container">
      <div className="row mb-5">
        <div className="col-12 px-0">
          <ModulesControls />
        </div>
      </div>

      <div className="row">
        <div className="col-12 px-0">
          <ul id="wd-modules" className="list-group rounded-0">
            <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
              <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" />
                Week 1
                <ModulesControlButtons />
              </div>
              <ul className="wd-lessons list-group rounded-0">
                <li className="wd-lesson list-group-item p-3 ps-1">
                  <BsGripVertical className="me-2 fs-3" />
                  LEARNING OBJECTIVES
                  <LessonControlButtons />
                </li>
                <li className="wd-lesson list-group-item p-3 ps-1">
                  <BsGripVertical className="me-2 fs-3" />
                  Introduction to the course
                  <LessonControlButtons />
                </li>
                <li className="wd-lesson list-group-item p-3 ps-1">
                  <BsGripVertical className="me-2 fs-3" />
                  Learn what is Web Development
                  <LessonControlButtons />
                </li>
                <li className="wd-lesson list-group-item p-3 ps-1">
                  <BsGripVertical className="me-2 fs-3" />
                  LESSON 1<LessonControlButtons />
                </li>
                <li className="wd-lesson list-group-item p-3 ps-1">
                  <BsGripVertical className="me-2 fs-3" />
                  LESSON 2<LessonControlButtons />
                </li>
              </ul>
            </li>
            <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
              <div className="wd-title p-3 ps-2 bg-secondary">
                {" "}
                <BsGripVertical className="me-2 fs-3" />
                Week 2
                <ModulesControlButtons />
              </div>
              <ul className="wd-lessons list-group rounded-0">
                <li className="wd-lesson list-group-item p-3 ps-1">
                  <BsGripVertical className="me-2 fs-3" />
                  LEARNING OBJECTIVES
                  <LessonControlButtons />
                </li>
                <li className="wd-lesson list-group-item p-3 ps-1">
                  {" "}
                  <BsGripVertical className="me-2 fs-3" />
                  LESSON 1
                  <LessonControlButtons />
                </li>
                <li className="wd-lesson list-group-item p-3 ps-1">
                  {" "}
                  <BsGripVertical className="me-2 fs-3" />
                  LESSON 2
                  <LessonControlButtons />
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
