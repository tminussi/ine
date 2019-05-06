output "ine_registrations_table" {
  value = "${aws_dynamodb_table.ine_registrations.name}"
}

output "ine_notifications_table" {
  value = "${aws_dynamodb_table.ine_notifications.name}"
}