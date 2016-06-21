package com.myblog

import grails.rest.Resource

@Resource(uri='/post', formats=['json'])
class Post {

    URL url

    PostContent postContent

    static embedded = ['postContent']

    static hasMany = [comments: Comment , tags: Tag]

    static constraints = {
    }
}
