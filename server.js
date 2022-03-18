const server = jsonserver.create()
const router = jsonserver.router('Estudiantes.json')
const middlewares = jsonserver.defaults()
server.use(middlewares)
server.use(router)
const port = process.env.PORT || 4000
server.listen(port, () => {
    console.log('Json Server is running');
})git init