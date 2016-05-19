import test.app.PartType

class BootStrap {

    def init = { servletContext ->
        new PartType(name: "W").save(failOnError: true, flush: true)
        new PartType(name: "X").save(failOnError: true, flush: true)
        new PartType(name: "Y").save(failOnError: true, flush: true)
        new PartType(name: "Z").save(failOnError: true, flush: true)
    }
    def destroy = {
    }
}
