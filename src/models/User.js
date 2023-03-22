const mongoose = required("mongoose");

const userSchema = new mongoose.Schema({
	github_username: String,
	github_username: String,
	bio: String,
	avatar_url: String,
	techs: [String],
});

module.exports = mongoose.model("User", userSchema);
