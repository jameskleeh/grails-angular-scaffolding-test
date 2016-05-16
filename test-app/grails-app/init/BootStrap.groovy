import test.app.Address
import test.app.Part
import test.app.PartType

class BootStrap {

    def init = { servletContext ->
        new Part(serialNumber: 1,
                 description: "x",
                 type: PartType.ELECTRICAL,
                 cost: new BigDecimal(123.456),
                 file: "hello".bytes,
                 dueDate: new Date(),
                 address: new Address(city: "Yo", street: "LaBelle")).save(failOnError: true, flush: true)
    }
    def destroy = {
    }
}
