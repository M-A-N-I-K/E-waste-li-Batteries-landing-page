import "./App.css";
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./Components/Home"));
const Schedule = lazy(() => import("./Components/Schedule"));
const Header = lazy(() => import("./Components/header"));
const CTA = lazy(() => import("./Components/CTA"));
const Testimonials = lazy(() => import("./Components/Testimonials"));
const Footer = lazy(() => import("./Components/footer"));

function App() {
	return (
		<BrowserRouter>
			<Suspense fallback={<div>Loading...</div>}>
				<Header />
			</Suspense>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</Suspense>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path="LiBatteries" element={<Schedule />} />
				</Routes>
			</Suspense>
			<Suspense fallback={<div>Loading...</div>}>
				<Testimonials />
			</Suspense>
			<Suspense fallback={<div>Loading...</div>}>
				<CTA />
			</Suspense>
			<Suspense fallback={<div>Loading...</div>}>
				<Footer />
			</Suspense>
		</BrowserRouter>
	);
}

export default App;
