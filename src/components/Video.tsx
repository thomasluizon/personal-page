type IProps = {
	children?: React.ReactNode
}

const videoSrc = 'https://i.imgur.com/WYlYOKA.mp4'

export default function Video({ children }: IProps) {
	return (
		<div className="relative h-screen w-screen overflow-hidden">
			<video
				autoPlay
				loop
				muted
				className="absolute w-full h-full object-cover -z-10"
			>
				<source src={videoSrc} type="video/mp4" />
			</video>
			{children}
		</div>
	)
}
