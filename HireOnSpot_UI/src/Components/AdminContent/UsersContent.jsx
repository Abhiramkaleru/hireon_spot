import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Button, Modal, Form, Spinner, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployers, updateEmployer, deleteEmployer } from "../../Redux/Slice";

const UsersContent = () => {
  const dispatch = useDispatch();
  const { loading, employers, error } = useSelector((state) => state.admin);
  const [showModal, setShowModal] = useState(false);
  const [selectedEmployer, setSelectedEmployer] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "" });

  useEffect(() => {
    dispatch(fetchEmployers());
  }, [dispatch]);

  // Handle Edit Click
  const handleEdit = (employer) => {
    setSelectedEmployer(employer);
    setFormData({ name: employer.name, email: employer.email });
    setShowModal(true);
  };

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Update Employer
  const handleUpdate = async () => {
    if (!formData.name || !formData.email) {
      alert("Please fill all fields.");
      return;
    }

    try {
      await dispatch(updateEmployer({ id: selectedEmployer.id, employerData: formData }));
      alert("Employer updated successfully!");
      setShowModal(false);
    } catch (error) {
      alert("Failed to update employer.");
    }
  };

  // Handle Delete Employer
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this employer?")) {
      await dispatch(deleteEmployer(id));
      alert("Employer deleted successfully!");
    }
  };

  return (
    <div className="container mt-4">
      {error && <Alert variant="danger">{error}</Alert>}
      {loading ? (
        <div className="text-center">
          <Spinner animation="border" />
        </div>
      ) : (
        <div className="table-responsive">
          <Table striped bordered hover>
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {employers.map((employer) => (
                <tr key={employer.id}>
                  <td>{employer.id}</td>
                  <td>{employer.name}</td>
                  <td>{employer.email}</td>
                  <td>{employer.role}</td>
                  <td>
                    <Button variant="primary" size="sm" className="me-2" onClick={() => handleEdit(employer)}>
                      Edit
                    </Button>
                    <Button variant="danger" size="sm" onClick={() => handleDelete(employer.id)}>
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}

      {/* Edit Employer Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Employer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleUpdate}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UsersContent;
