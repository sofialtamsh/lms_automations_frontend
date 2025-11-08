import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css"; // Tailwind
import "antd/dist/reset.css"; // AntD v5 reset (optional)
const root = createRoot(document.getElementById("root"));
root.render(<App />);
