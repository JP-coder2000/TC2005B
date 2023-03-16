module.exports = (request, response, next) => {
    if (!request.session.isLoggedIn) {
        return response.redirect('/usuarios/login');
    }
    
    if (!(request.session.privilegios.indexOf('crear_pintura') >= 0)) {
        return response.redirect('/pinturas');
    }
    next();
};