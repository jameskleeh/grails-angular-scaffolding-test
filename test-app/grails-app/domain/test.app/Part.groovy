package test.app

import grails.rest.Resource

@Resource(uri='/part', formats=['json'])
class Part {

    Integer serialNumber
    BigDecimal quantity
    String description
    PartType type
    BigDecimal cost
    Address address

    static embedded = ['address']

    static belongsTo = [workOrder: WorkOrder]

    static constraints = {
    }
}
