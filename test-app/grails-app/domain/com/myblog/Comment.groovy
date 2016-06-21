package com.myblog

class Comment {

    String text

    static belongsTo = [post: Post]

    static constraints = {
    }
}
