import { Router } from "express";

const router: Router = Router();

router.get("/", async (req, res) => {
    res.sendFile("reservation.pdf", { root: "." });
});

export default router;
