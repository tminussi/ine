resource "aws_dynamodb_table" "ine_registrations" {
    name = "${var.environment}_ine_registrations"
    hash_key = "id"
    read_capacity = 5
    write_capacity = 5
    attribute = {
        name = "id"
        type = "S"
    }
}

resource "aws_dynamodb_table" "ine_notifications" {
    name = "${var.environment}_ine_notifications"
    hash_key = "id"
    read_capacity = 5
    write_capacity = 5
    attribute = {
        name = "id"
        type = "S"
    }
}
