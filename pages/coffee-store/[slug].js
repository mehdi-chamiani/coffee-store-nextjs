import { useRouter } from 'next/router';
import Link from 'next/link';

const CoffeeStore = () => {
	const router = useRouter();
	return (
		<>
			<div>Coffee Store Page {router.query.id}</div>
			<div>
				<Link href='/'>
					<a>Back to Home</a>
				</Link>
			</div>
		</>
	);
};

export default CoffeeStore;
