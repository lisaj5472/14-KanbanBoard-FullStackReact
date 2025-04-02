// src/routes/seed-routes.ts
import { Router } from "express";
import { seedUsers } from "../seeds/user-seeds.js";
import { seedTickets } from "../seeds/ticket-seeds.js";

const router = Router();

router.post("/run-seed", async (_req, res) => {
  try {
    await seedUsers();
    await seedTickets();
    res.status(200).json({ message: "Seeding complete!" });
  } catch (err) {
    console.error("Seeding failed:", err);
    res.status(500).json({ error: "Seeding failed", details: err });
  }
});

export default router;
