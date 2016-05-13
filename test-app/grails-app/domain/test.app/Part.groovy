package test.app

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
