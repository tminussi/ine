output "registration_role_arn" {
  value = "${aws_iam_role.registration_role.arn}"
}

output "email_role_arn" {
  value = "${aws_iam_role.email_role.arn}"
}