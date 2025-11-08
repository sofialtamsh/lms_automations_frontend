import React from "react";
import { Button } from "antd";
import Navbar from "./components/Navbar";
import ActionButtons from "./components/ActionButtons";
import DataTable from "./components/DataTable";

export default function App(){
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar/>
      <div className="p-6">
        <ActionButtons />
        <DataTable/>
      </div>
    </div>
  )
}
