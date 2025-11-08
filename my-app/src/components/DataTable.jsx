import React, { useEffect, useState } from "react";
import { Table, Spin, message } from "antd";

const DataTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch Data
  useEffect(() => {
    const fetchData = async () => {
      try {
        message.loading({ content: "Fetching data...", key: "fetch" });

        const res = await fetch("http://localhost:8000/api/get-automation-status");
        const result = await res.json();

        console.log("✅ Data fetched:", result.assignments);

        // Format data for Ant Design Table
        const formattedData = result.assignments.map((item, index) => ({
          key: index + 1,
          title: item.title || "N/A",
          batch: item.batch || "N/A",
          section: item.section || "N/A",
          assessmentClone: item.isCloned || "N/A",
          assignmentCreated: item.isAssignmentCreated || "N/A",
          notesUpdated: item.isNotesUpdated || "N/A",
        }));

        setData(formattedData);
        message.success({ content: "Data loaded successfully", key: "fetch" });
      } catch (error) {
        console.error("Error fetching data:", error);
        message.error({ content: "Failed to load data", key: "fetch" });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Define Columns
  const columns = [
    { title: "Title", dataIndex: "title", key: "title" },
    { title: "Batch", dataIndex: "batch", key: "batch" },
    { title: "Section", dataIndex: "section", key: "section" },
    { title: "Assessment Clone", dataIndex: "assessmentClone", key: "assessmentClone" },
    { title: "Assignment Created", dataIndex: "assignmentCreated", key: "assignmentCreated" },
    { title: "Notes Updated", dataIndex: "notesUpdated", key: "notesUpdated" },
  ];

  return (
    <div className="p-6 bg-white shadow-sm rounded-lg">
      {loading ? (
        <div className="flex justify-center items-center h-48">
          <Spin size="large" />
        </div>
      ) : (
        <Table
          columns={columns}
          dataSource={data}
          pagination={{ pageSize: 10 }}
          bordered
        />
      )}
    </div>
  );
};

export default DataTable;
