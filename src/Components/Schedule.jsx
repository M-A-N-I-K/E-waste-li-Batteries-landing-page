import React from "react";
import img from "../assets/img3.jpg";
import Section from "./section";
const Schedule = () => {
	return (
		<>
			<div className="relative h-[130vh] sm:h-screen overflow-hidden z-20 bg-indigo-900">
				<img
					src={img}
					className="absolute object-cover w-full h-full opacity-50"
				/>
				<div className="absolute inset-0 bg-black opacity-25"></div>
				<div className="container relative z-10 flex items-center w-4/5  py-4 mx-auto my-24 border-4 border-white rounded-lg md:my-32">
					<div className="relative z-10 flex flex-col items-center justify-between w-full">
						<Section>
							<p className="flex flex-col items-center text-2xl font-extrabold text-center text-yellow-300 md:text-4xl sm:text-2xl lg:text-4xl">
								Dispose of Your Li Batteries Responsibly
							</p>
						</Section>
						<Section>
							<p className="flex flex-col items-center max-w-lg mt-6 text-lg md:text-lg sm:text-sm lg:text-xl font-extrabold text-center text-white">
								Lithium-ion batteries are commonly found in electronic
								devices such as laptops, smartphones, and electric cars.
								While they are convenient and long-lasting, they can
								also be hazardous if not disposed of properly. Our
								battery recycling program ensures that your Li batteries
								are safely and responsibly recycled, reducing the risk
								of environmental pollution and conserving valuable
								resources. Let's work together to keep our planet
								healthy and sustainable by disposing of your Li
								batteries in an eco-friendly way.
							</p>
						</Section>
						<Section>
							<a
								href="#"
								className="block px-2 py-2 sm:px-4 sm:py-3 mt-10 text-sm sm:text-md rounded-lg font-bold text-black uppercase bg-yellow-300 hover:bg-slate-200 "
							>
								Schedule a pickup for your Li batteries.
							</a>
						</Section>
					</div>
				</div>
			</div>

			<div className="container p-6 px-6 mx-auto bg-indigo-900 opacity-90 md:h-[100vh] lg:h-[90vh] sm:h-[190vh]">
				<Section>
					<div className="mb-16 text-center">
						<p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-yellow-300 sm:text-4xl">
							Benefits of Recycling Li Batteries
						</p>
					</div>
				</Section>
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
								Lithium-ion batteries contain toxic chemicals that can
								leach into the environment if not disposed of properly.
								By recycling Li batteries, these toxic materials can be
								kept out of landfills and waterways.
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
								Recycling Li batteries reduces the need for new
								materials to be mined, refined, and processed,
								conserving natural resources and reducing the carbon
								footprint of battery production.
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
								Many countries have regulations in place that require Li
								batteries to be properly disposed of. By recycling Li
								batteries, you're complying with these regulations and
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
									Reduce greenhouse gas emissions
								</div>
							</Section>
						</div>
						<Section>
							<p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
								Li batteries contain materials such as cobalt and
								nickel, which are often mined in environmentally
								damaging ways. By recycling Li batteries, we can reduce
								the demand for these materials and reduce the associated
								greenhouse gas emissions.
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
								<div className="ml-4 text-xl">
									Avoid hazardous situation
								</div>
							</Section>
						</div>
						<Section>
							<p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
								Li batteries can pose a fire risk if they are not
								disposed of properly. By recycling Li batteries, we can
								avoid these hazardous situations and keep our
								communities safe.
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
								<div className="ml-4 text-xl">
									Support the circular economy
								</div>
							</Section>
						</div>
						<Section>
							<p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
								Recycling Li batteries allows the materials to be
								repurposed and used in new products, creating a
								closed-loop system that supports the circular economy.
							</p>
						</Section>
					</div>
				</div>
			</div>
		</>
	);
};

export default Schedule;
