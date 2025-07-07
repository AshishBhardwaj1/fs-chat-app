


import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<AuthContextProvider>
				<App />
			</AuthContextProvider>
		</BrowserRouter>
	</React.StrictMode>
);
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App.jsx'; // Assuming App.jsx is your main component
// import './index.css'; // Optional: for global styles

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <BrowserRouter>
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   </BrowserRouter>
// );