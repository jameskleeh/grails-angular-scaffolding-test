package test.app

import grails.rest.Resource

@Resource(uri='/part', formats=['json'])
class Part {

    String name
    PartType foo
    Address address

    static embedded = ['address']

    static hasMany = [bars: SubPart, tallyWags: Tag]

    static constraints = {
    }
}
