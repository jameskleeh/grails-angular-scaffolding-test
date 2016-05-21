package test.app

import grails.rest.Resource

/**
 * Created by Jim on 5/18/2016.
 */
@Resource(uri='/partType', formats=['json'])
class PartType {

    String name
}
