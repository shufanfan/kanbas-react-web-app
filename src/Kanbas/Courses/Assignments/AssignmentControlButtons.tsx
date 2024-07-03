import { useState } from "react";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { FaTrash } from "react-icons/fa";

export default function AssignmentControlButtons({
  assignmentId,
  deleteAssignment,
}: {
  assignmentId: string;
  deleteAssignment: (assignmentId: string) => void;
}) {
  const [showModal, setShowModal] = useState(false);

  const handleDeleteClick = () => {
    setShowModal(true);
  };

  const handleConfirmDelete = () => {
    deleteAssignment(assignmentId);
    setShowModal(false);
  };

  const handleCancelDelete = () => {
    setShowModal(false);
  };

  return (
    <div className="d-flex align-items-center">
      <FaTrash className="text-danger me-2 mb-1" onClick={handleDeleteClick} />
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />

      {showModal && (
        <div
          id="wd-delete-assignment-dialog"
          className="modal fade show"
          style={{ display: "block" }}
          tabIndex={-1}
          role="dialog"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5">Confirm Delete</h1>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleCancelDelete}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                Are you sure to delete this assignment?
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCancelDelete}
                >
                  No
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={handleConfirmDelete}
                >
                  Yes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
