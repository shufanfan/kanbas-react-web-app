import GradesControlButtons from "./GradesControlButtons";
import GradesSearchArea from "./GradesSearchArea";
export default function Grades() {
  return (
    <div id="wd-grades" className="container px-4 d-flex flex-column">
      <div className="row">
        <div className="col-sm-12 text-end">
          <GradesControlButtons />
        </div>
      </div>
      <div className="my-3"></div>
      <GradesSearchArea />

      <div className="container table-responsive mt-3">
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Student Name</th>
              <th>
                A1 SETUP
                <br />
                Out of 100
              </th>
              <th>
                A2 HTML
                <br />
                Out of 100
              </th>
              <th>
                A3 CSS
                <br />
                Out of 100
              </th>
              <th>
                A4 BOOTSTRAP
                <br />
                Out of 100
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Jane Adams</td>
              <td>100%</td>
              <td>96.67%</td>
              <td>
                <input type="text" value="92.18" className="form-control" />
              </td>
              <td>66.22%</td>
            </tr>
            <tr>
              <td>Christina Allen</td>
              <td>100%</td>
              <td>100%</td>
              <td>
                <input type="text" value="100" className="form-control" />
              </td>
              <td>100%</td>
            </tr>
            <tr>
              <td>Samreen Ansari</td>
              <td>100%</td>
              <td>100%</td>
              <td>
                <input type="text" value="100" className="form-control" />
              </td>
              <td>100%</td>
            </tr>
            <tr>
              <td>Han Bao</td>
              <td>100%</td>
              <td>100%</td>
              <td>
                <input type="text" value="88.03" className="form-control" />
              </td>
              <td>98.99%</td>
            </tr>
            <tr>
              <td>Mahi Sai Srinivas Bobbili</td>
              <td>100%</td>
              <td>96.67%</td>
              <td>
                <input type="text" value="98.37" className="form-control" />
              </td>
              <td>100%</td>
            </tr>
            <tr>
              <td>Siran Cao</td>
              <td>100%</td>
              <td>100%</td>
              <td>
                <input type="text" value="100" className="form-control" />
              </td>
              <td>100%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
