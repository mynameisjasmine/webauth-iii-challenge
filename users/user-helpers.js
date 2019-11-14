module.exports = {
    userValidation
}

function userValidation(user) {
let errors = [];
if(!user.username || user.username.length < 2) {
errors.push("Please provide a username with at least 2 characters")
}

if(!user.password || user.password.length < 4) {
 errors.push("Please include a password with at least 4 characters")
}

return {
 isSuccessful: errors.length > 0 ? false : true,
 errors
}

}