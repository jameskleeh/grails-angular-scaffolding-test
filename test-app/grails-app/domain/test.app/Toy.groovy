package test.app

import grails.rest.Resource

@Resource(uri='/toy', formats=['json'])
class Toy {

    Integer serialNumber
    String description
    ToyType type
    BigDecimal cost
    Address address
    Date dueDate
    TimeZone timeZone

    static embedded = ['address']
}