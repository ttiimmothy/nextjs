export async function getChannelProps() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_PATH}/subcategory`);
	return res.json();
}