package test.app

import grails.rest.Resource

@Resource(uri='/part', formats=['json'])
class Part {

    String name
    PartType partType

    static constraints = {
    }
}
