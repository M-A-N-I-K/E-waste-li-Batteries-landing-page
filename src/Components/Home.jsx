import React from "react";
import img from "../assets/img4.jpg";
import Section from "./section";
const Home = () => {
	return (
		<>
			<div className="relative h-[130vh] sm:h-screen overflow-hidden bg-indigo-900">
				<img
					src={img}
					className="absolute object-cover opacity-50  w-full h-full"
				/>
				<div className="absolute inset-0 bg-black opacity-25"></div>
				<div className="container relative z-10 flex items-center px-6 py-32 mx-auto md:px-12 xl:py-40">
					<div className="relative z-10 flex flex-col items-start lg:w-3/5 xl:w-2/5">
						<Section>
							<span className="font-bold text-4xl lg:text-4xl md:text-3xl text-yellow-400 uppercase">
								E-Waste
							</span>
						</Section>
						<Section>
							<h1 className="mt-4 lg:text-4xl md:text-3xl font-bold leading-tight text-white sm:text-2xl">
								Don't let your electronics go to waste -
								<br />
								recycle them properly with us.
							</h1>
						</Section>
						<Section>
							<a
								href="#"
								className="block px-4 md:text-3xl py-3 mt-10 text-lg font-bold text-yellow-300 uppercase bg-white rounded-lg hover:bg-gray-100"
							>
								Discover
							</a>
						</Section>
					</div>
				</div>
			</div>

			<div className="container p-6 px-6 mx-auto bg-indigo-900 opacity-90 md:h-[100vh] lg:h-[90vh] sm:h-[190vh]">
				<div className="mb-16 text-center">
					<Section>
						<p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-yellow-300 sm:text-4xl">
							Benefits of Recycling E-Waste
						</p>
					</Section>
				</div>
				<div className="flex flex-wrap my-12 text-yellow-300">
					<div className="w-full p-8 border-b md:w-1/2 md:border-r lg:w-1/3">
						<div className="flex items-center mb-6">
							<Section>
								<svg
									width="20"
									height="20"
									fill="currentColor"
									className="w-6 h-6 text-indigo-500"
									viewBox="0 0 1792 1792"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
								</svg>
							</Section>
							<Section>
								<div className="ml-4 text-xl">
									Protect the environment
								</div>
							</Section>
						</div>
						<Section>
							<p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
								Improper disposal of e-waste can release hazardous
								materials into the environment, polluting air, water,
								and soil. By properly disposing of your e-waste, you're
								helping to protect the planet.
							</p>
						</Section>
					</div>
					<div className="w-full p-8 border-b md:w-1/2 lg:w-1/3 lg:border-r">
						<div className="flex items-center mb-6">
							<Section>
								<svg
									width="20"
									height="20"
									fill="currentColor"
									className="w-6 h-6 text-indigo-500"
									viewBox="0 0 1792 1792"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
								</svg>
							</Section>
							<Section>
								<div className="ml-4 text-xl">
									Conserve natural resources
								</div>
							</Section>
						</div>
						<Section>
							<p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
								Electronics contain valuable materials that can be
								reused in new products, reducing the need for new raw
								materials. By recycling your e-waste, you're helping to
								conserve natural resources.
							</p>
						</Section>
					</div>
					<div className="w-full p-8 border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0">
						<div className="flex items-center mb-6">
							<Section>
								<svg
									width="20"
									height="20"
									fill="currentColor"
									className="w-6 h-6 text-indigo-500"
									viewBox="0 0 1792 1792"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
								</svg>
							</Section>
							<Section>
								<div className="ml-4 text-xl">
									Comply with regulations
								</div>
							</Section>
						</div>
						<Section>
							<p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
								Many countries have regulations in place that require
								e-waste to be properly disposed of. By recycling your
								e-waste, you're complying with these regulations and
								helping to prevent penalties for non-compliance.
							</p>
						</Section>
					</div>
					<div className="w-full p-8 border-b md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0">
						<div className="flex items-center mb-6">
							<Section>
								<svg
									width="20"
									height="20"
									fill="currentColor"
									className="w-6 h-6 text-indigo-500"
									viewBox="0 0 1792 1792"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
								</svg>
							</Section>
							<Section>
								<div className="ml-4 text-xl">
									Reduce the risk of identity theft
								</div>
							</Section>
						</div>
						<Section>
							<p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
								Old electronics can contain personal information that
								could be used for identity theft if not disposed of
								properly. By recycling your e-waste, you're reducing the
								risk of sensitive information falling into the wrong
								hands.
							</p>
						</Section>
					</div>
					<div className="w-full p-8 border-b md:w-1/2 md:border-r md:border-b-0 lg:w-1/3 lg:border-b-0">
						<div className="flex items-center mb-6">
							<Section>
								<svg
									width="20"
									height="20"
									fill="currentColor"
									className="w-6 h-6 text-indigo-500"
									viewBox="0 0 1792 1792"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
								</svg>
							</Section>
							<Section>
								<div className="ml-4 text-xl">Create jobs</div>
							</Section>
						</div>
						<Section>
							<p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
								Recycling e-waste creates jobs in the recycling
								industry, helping to support local communities and
								economies.
							</p>
						</Section>
					</div>
					<div className="w-full p-8 md:w-1/2 lg:w-1/3">
						<div className="flex items-center mb-6">
							<Section>
								<svg
									width="20"
									height="20"
									fill="currentColor"
									className="w-6 h-6 text-indigo-500"
									viewBox="0 0 1792 1792"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
								</svg>
							</Section>
							<Section>
								<div className="ml-4 text-xl">Convenient and easy</div>
							</Section>
						</div>
						<Section>
							<p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
								Disposing of e-waste is now easier than ever, with many
								recycling programs offering drop-off locations, pick-up
								services, and mail-in options.
							</p>
						</Section>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
