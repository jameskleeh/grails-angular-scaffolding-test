package test.app

class WorkOrder {

    String userId
    String description
    BigDecimal newCost
    User assignedTo
    Date dateStarted
    Date dateDue

    Date dateCreated
    Date lastUpdated

    static hasMany = [parts: Part]

    static constraints = {
        assignedTo nullable: true
    }
}
