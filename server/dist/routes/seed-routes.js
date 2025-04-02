import { Router } from "express";
import { seedUsers } from "../seeds/user-seeds.js";
const router = Router();
router.post("/run-seed", async (req, res) => {
    const token = req.headers["x-seed-token"];
    const secret = process.env.SEED_SECRET;
    if (!secret || token !== secret) {
        return res.status(403).json({ message: "Unauthorized access to seeder." });
    }
    try {
        await seedUsers();
        res.status(200).json({ message: "Database seeded successfully!" });
    }
    catch (err) {
        console.error("Seeding error:", err);
        res.status(500).json({ message: "Seeding failed.", error: err });
    }
});
export default router;
