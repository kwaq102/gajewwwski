import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import { HelmetProvider } from "react-helmet-async";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<HelmetProvider>
					<App />
				</HelmetProvider>
			</Provider>
		</BrowserRouter>
	</React.StrictMode>
);
