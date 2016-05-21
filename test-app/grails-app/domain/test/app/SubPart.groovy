package test.app

import grails.rest.Resource

@Resource(uri="/subPart")
class SubPart {

    String name

    static belongsTo = [mainPart: Part]

    static constraints = {
    }
}
