import express from "express";
const router = express.Router();

const users = [
  { fullName: "one", email: "one@gmail.com", id: "1" },
  { fullName: "two", email: "two@gmail.com", id: "2" },
];

router.get("/", (req, res) => {
  res.status(200).json({
    error: false,
    data: users,
    msg: "User's fetched sucessfully",
  });
});

router.post("/", (req, res) => {
  const { fullName, email } = req.body;
  users.push({ fullName, email, id: users.length + 1 });
  res
    .status(201)
    .json({ error: false, data: users, message: "user added Sucessfully" });
});

router.get("/:id", (req, res) => {
  const user = users.find((data) => data.id == req.params.id);
  if (!user) {
    return res
      .status(404)
      .json({ error: false, data: user, msg: "user Found" });
  }
});

export default router;
