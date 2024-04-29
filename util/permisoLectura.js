exports.consultaLaboratorios = (request, response, next) => {
    const tienePermiso = request.session.permisos.includes('consultaLaboratorios');
    if (tienePermiso) {
        next();
    } else {
        return response.status(404).render('404');
    }
};