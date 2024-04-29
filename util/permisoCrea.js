exports.creaLaboratorios = (request, response, next) => {
    const tienePermiso = request.session.permisos.includes('creaLaboratorios');
    if (tienePermiso) {
        next();
    } else {
        return response.status(404).render('404');
    }
};