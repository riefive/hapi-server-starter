export default {
    method: 'GET',
    path: '/name/{name}',
    handler: (request, h) => {
        request.logger.info('In handler %s', request.path);
        return 'Hello, ' + encodeURIComponent(request.params.name) + '!';
    }
};