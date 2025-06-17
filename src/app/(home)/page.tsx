import { trpc } from "@/trpc/server";

export default async function Home() {
	const data = await trpc.hello({ text: "Antonio" });
	return <div>main section here with data: {data.greeting}</div>;
}
