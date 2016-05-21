package test.app

import grails.rest.Resource

@Resource(uri="/tag")
class Tag {

    String name

    static constraints = {
    }
}
