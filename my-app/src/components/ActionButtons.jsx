import React from "react";
import { Button, message } from "antd";

const ActionButtons = () => {
  // Common function to handle API POST requests
  const handleApiRequest = async (url, actionName, method) => {
    try {
      message.loading({ content: `${actionName} in progress...`, key: actionName });

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const data = await response.json();

      message.success({
        content: data.message || `${actionName} completed successfully!`,
        key: actionName,
      });
    } catch (error) {
      console.error(`Error during ${actionName}:`, error);
      message.error({
        content: `Failed to ${actionName.toLowerCase()}. Please try again.`,
        key: actionName,
      });
    }
  };

  // Handlers for each button
  const handleUploadCSV = () =>
    handleApiRequest("http://localhost:8000/api/add-assignment-data", "Upload data from CSV", "POST");

  const handleCreateAssignment = () =>
    handleApiRequest("http://localhost:8000/api/create-assignments", "Create Assignment", "POST");

  const handleUpdateNotes = () =>
    handleApiRequest("http://localhost:8000/api/start-update-notes", "Update Notes", "POST");

  const handleClearData = () =>
    handleApiRequest("http://localhost:8000/api/cleardata", "Clear data from CSV", "DELETE");

  return (
    <div className="flex flex-wrap gap-4 justify-center items-center p-6 bg-white shadow-sm rounded-lg">
      <Button type="primary" onClick={handleUploadCSV}>
        Upload data from CSV
      </Button>
      <Button type="default" onClick={handleCreateAssignment}>
        Create Assignment
      </Button>
      <Button type="dashed" onClick={handleUpdateNotes}>
        Update Notes
      </Button>
      <Button type="primary" danger onClick={handleClearData}>
        Clear data from CSV
      </Button>
    </div>
  );
};

export default ActionButtons;
