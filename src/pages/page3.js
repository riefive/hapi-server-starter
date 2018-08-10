export default {
    method: 'GET',
    path: '/page3',
    handler: (request, h) => {
        const response = h.response('Hello page 3');
        response.type('text/plain');
        return response;
    }
};