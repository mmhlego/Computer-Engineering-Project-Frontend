import { ArrowUp2 } from "iconsax-react";
import { useState } from "react";
import CheckBox from "./CheckBox";

interface Props {
	text: string;
	disabled?: boolean;
	children: JSX.Element[];
}

export default function CollapsiblePanel({
	text,
	disabled = false,
	children,
}: Props) {
	const [closed, setClosed] = useState(true);

	const toggleClosed = () => setClosed((prev) => !prev);

	return (
		<div className="w-full">
			<div
				className={`w-full py-5 px-4 border-2 rounded-lg flex gap-2 ${
					disabled
						? "border-gray-300 text-gray-300 cursor-not-allowed"
						: "border-blue/80 cursor-pointer"
				}`}
				onClick={disabled ? undefined : toggleClosed}
			>
				<ArrowUp2
					className={`duration-300 cursor-pointer ${
						closed ? "rotate-180" : ""
					}`}
				/>
				{text}
			</div>
			<div
				className={`w-full px-3 py-1 mt-1 border-2 border-gray-300 rounded-lg cursor-pointer flex gap-2 flex-col overflow-hidden ${
					closed
						? "max-h-0 opacity-0 duration-300"
						: "max-h-screen duration-700"
				}`}
			>
				{children.map((child, index) => {
					return (
						<div
							className={`w-full pt-2 pb-3 border-gray-300 flex justify-end ${
								index < children.length - 1
									? "border-b-[1px]"
									: ""
							}`}
							key={index}
						>
							{child}
						</div>
					);
				})}
			</div>
		</div>
	);
}
