package com.myblog

import grails.rest.Resource

@Resource(uri="/comment")
class Comment {

    String text

    static belongsTo = [post: Post]

    static constraints = {
    }
}
