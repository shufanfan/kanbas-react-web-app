import { BsBoxArrowInRight } from "react-icons/bs";
import { LiaFileImportSolid } from "react-icons/lia";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
export default function GradesControlButtons() {
  return (
    <div className=" container mt-4">
      <button className="btn btn-secondary me-2">
        <BsBoxArrowInRight className="me-1" /> Import
      </button>
      <button className="btn btn-secondary me-2">
        <LiaFileImportSolid className="me-1" /> Export <IoIosArrowDown />
      </button>
      <button className="btn btn-secondary me-2">
        <IoMdSettings />
      </button>
    </div>
  );
}
