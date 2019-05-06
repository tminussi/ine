output "registration_role_arn" {
  value = "${module.iam_role.registration_role_arn}"
}

output "ine_registrations_table" {
  value = "${module.storage.ine_registrations_table}"
}