import { db } from "@/db";
import { categories } from "@/db/schema";

// seed categories scripts
const categoryNames = [
	"Music",
	"Gaming",
	"Cartoon",
	"Tutorial",
	"Cars and Vehicles",
	"News",
	"Pets",
	"Sports",
	"Science and Technology",
	"Animals",
	"Travel",
	"Comedy",
	"Politics",
];

async function main() {
	console.log("Seeding categories...");

	try {
		const values = categoryNames.map((name) => ({
			name,
			description: `Videos related to ${name.toLowerCase()}`,
		}));
		await db.insert(categories).values(values);
		console.log("Categories seeded successfully.");
	} catch (error) {
		console.error("Error seeding categories: ", error);
		process.exit(1);
	}
}

main();
