export default {
    method: 'GET',
    path: '/hello',
    handler: (request, h) => {
        return h.file('./public/hello.html');
    }
};