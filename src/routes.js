const { Router } = require("express");
const axios = require("axios");

const routes = Router();

routes.post("/users", async (req, res) => {
	const { github_username } = req.body;

	const apiRes = await axios.get(
		`https://api.github.com/users/${github_username}`
	);

	//const { name = login, avatar_url, bio } = apiRes.data;

	console.log(apiRes.data);

	return res.json({ message: "Cadastro Concluido!" });
});

module.exports = routes;
