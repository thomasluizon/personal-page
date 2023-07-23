import Socials from './Socials'

export default function Card() {
	return (
		<div className="flex flex-col items-center text-xl gap-7 bg-background rounded-lg p-8 mini:px-2 mini:py-8 animate-slide">
			<h1 className="text-4xl mini:text-3xl">Thomas Luizon</h1>
			<Socials />
		</div>
	)
}
