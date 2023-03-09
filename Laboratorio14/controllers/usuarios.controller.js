exports.logout = (request, response, next) => {
       request.session.destroy(() => {
           response.redirect('/pinturas'); //Este código se ejecuta cuando la sesión se elimina.
       });
    };