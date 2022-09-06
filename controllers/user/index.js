//Handle login
const handleLogin = (req, res) => 
{
    res.json({
        message: 'login successful'
    })
}

//requestPasswordResetLink
const requestPasswordResetLink = (req, res) => {
    res.json({
        message: 'password reset link sent successful'
    })
}

//changePassword
const changePassword = (req, res) => 
{
    res.json({
        message: 'password updated successful'
    })
}

module.exports = 
{
    handleLogin,
    requestPasswordResetLink,
    changePassword
};