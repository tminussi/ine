output "registration_role_arn" {
  value = "${aws_iam_role.registration_role.arn}"
}

output "email_role_arn" {
  value = "${aws_iam_role.email_role.arn}"
}
output "poller_role_arn" {
  value = "${aws_iam_role.poller_role.arn}"
}