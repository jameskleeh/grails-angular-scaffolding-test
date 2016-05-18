package test.app

import grails.rest.Resource

@Resource(uri='/part', formats=['json'])
class Part {

    Integer serialNumber
    String description
    PartType type
    BigDecimal cost
    Address address
    byte[] file
    Date dueDate

    static embedded = ['address']

    static constraints = {
        file maxSize: 1000000
    }
}
