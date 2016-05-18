import grails.converters.JSON
import org.grails.web.converters.exceptions.ConverterException
import org.grails.web.converters.marshaller.ObjectMarshaller
import org.grails.web.json.JSONWriter
import org.springframework.beans.BeanUtils
import test.app.Address
import test.app.Part
import test.app.PartType

import java.lang.reflect.Method

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
