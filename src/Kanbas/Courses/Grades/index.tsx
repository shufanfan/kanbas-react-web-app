import GradesControlButtons from "./GradesControlButtons";
import GradesSearchArea from "./GradesSearchArea";
import { useParams } from "react-router";
import * as db from "../../Database";

export default function Grades() {
  const { cid } = useParams();

  const assignments = db.assignments.filter((a) => a.course === cid);
  const enrollments = db.enrollments.filter((e) => e.course === cid);
  const enrolledStudentIds = new Set(enrollments.map((e) => e.user));
  const enrolledStudents = db.users.filter((user) =>
    enrolledStudentIds.has(user._id)
  );
  const grades = db.grades.filter((grade) =>
    assignments.some((a) => a._id === grade.assignment)
  );

  const studentGrades = enrolledStudents.map((user) => {
    const userGrades = grades.filter((grade) => grade.student === user._id);
    const gradesByAssignment = assignments.map((assignment) => {
      const grade = userGrades.find((g) => g.assignment === assignment._id);
      return grade ? grade.grade : "N/A";
    });

    return {
      userName: user.firstName + " " + user.lastName,
      grades: gradesByAssignment,
    };
  });

  return (
    <div id="wd-grades" className="container px-4 d-flex flex-column">
      <div className="row">
        <div className="col-sm-12 text-end">
          <GradesControlButtons />
        </div>
      </div>
      <div className="my-3"></div>
      <GradesSearchArea />

      <div id="wd-grades-table" className="table-responsive mt-3">
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Student Name</th>
              {assignments.map((assignment, index) => (
                <th key={index}>
                  {assignment.title}
                  <br />
                  Out of 100
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {studentGrades.map((student, index) => (
              <tr key={index}>
                <td>{student.userName}</td>
                {student.grades.map((grade, gradeIndex) => (
                  <td key={gradeIndex}>{grade}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
