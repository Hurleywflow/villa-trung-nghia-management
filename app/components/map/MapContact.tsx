import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react'
import { Card } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

function MapContact(): JSX.Element {
	return (
		<Card className="relative mx-auto h-28 w-full overflow-hidden">
			<address>
				<Link href="https://maps.app.goo.gl/rXLjDijNYfvs7koE8" target="_blank">
					<Suspense
						fallback={
							<div className="flex size-full max-h-screen flex-col items-center justify-center space-y-3 overflow-hidden bg-background">
								<Skeleton className="aspect-video w-4/5 rounded-xl" />
								<div className="flex w-full flex-col items-center justify-center space-y-2">
									<Skeleton className="h-4 w-3/5 " />
									<Skeleton className="h-4 w-3/5 " />
								</div>
							</div>
						}
					>
						<Image
							src="/images/map/map1.jpeg"
							alt="address"
							fill
							className="object-cover object-center"
						/>
					</Suspense>
				</Link>
			</address>
		</Card>
	)
}

export default MapContact
