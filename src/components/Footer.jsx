import { IconBrandTwitterFilled } from "@tabler/icons-react";
import { IconBrandGithubFilled } from "@tabler/icons-react";

export default function Footer() {
	return (
		<footer className="absolute bottom-2 left-0 right-0 flex h-16 items-center justify-center text-center">
			{/* by{" "}
			<a
				className="text-dodgerBlue-400 underline underline-offset-4"
				href="https://twitter.com/_m2x07"
				target="_blank"
				rel="noopener noreferrer">
				m2x07
			</a>
			{" | "}
			view on{" "}
			<a
				className="text-dodgerBlue-400 underline underline-offset-4"
				href="http://github.com/m2x07/tic-tac-toe"
				target="_blank"
				rel="noopener noreferrer">
				github
			</a> */}

			<a
				href="https://github.com/m2x07/tic-tac-toe"
				target="_blank"
				rel="noopener noreferrer"
				className="neumorphic-shadow-small transition-color github relative mx-3 justify-center p-3 text-slate-400 duration-300 hover:text-white">
				<IconBrandGithubFilled
					size={18}
					className="relative -top-0.5 inline-block"
				/>
				<span className="ml-1.5 text-sm tracking-wide">Github</span>
			</a>
			<a
				href="https://twitter.com/_m2x07"
				target="_blank"
				rel="noopener noreferrer"
				className="neumorphic-shadow-small transition-color github relative mx-3 justify-center p-3 text-slate-400 duration-300 hover:text-white">
				<IconBrandTwitterFilled
					size={18}
					className="relative -top-0.5 inline-block"
				/>
				<span className="ml-1.5 text-sm tracking-wide">Twitter</span>
			</a>
		</footer>
	);
}
