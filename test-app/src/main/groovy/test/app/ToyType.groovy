package test.app

/**
 * Created by Jim on 5/17/2016.
 */
enum ToyType {

    ACTION_FIGURE("Action Figure"),
    DOLL("Doll")

    private final String value

    ToyType(String value) {this.value = value}

    public String value() { value }

    String toString() {
        value
    }
}
