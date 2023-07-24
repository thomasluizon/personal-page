import { Social } from '@/types/Social'
import Image from 'next/image'
import Link from 'next/link'

type IProps = {
	social: Social
}

const iconSize = 48

export default function SocialIcon({ social }: IProps) {
	return (
		<Link
			key={social.alt}
			href={social.href}
			target="_blank"
			className="mini:scale-75 mini:hover:scale-90 hover:scale-110 transition-transform duration-600"
		>
			<Image
				alt={social.alt}
				src={social.src}
				width={iconSize}
				height={iconSize}
				className="rounded-3xl"
			/>
		</Link>
	)
}
