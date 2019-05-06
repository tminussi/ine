provider "aws" {
  access_key = "${var.aws_access_key}"
  secret_key = "${var.aws_secret_key}"
  region = "${var.aws_region}"
  token = "${var.aws_session_token}"
}


module "iam_role" {
  source = "./iam_roles"
  environment = "${var.environment}"
}

module "cloud_formation_stack" {
  source = "./cloud_formation"
  environment = "${var.environment}"
  registration_role_arn = "${module.iam_role.registration_role_arn}"
  ine_registrations_table = "${module.storage.ine_registrations_table}"
  ine_notifications_table = "${module.storage.ine_notifications_table}"
  email_role_arn = "${module.iam_role.email_role_arn}"
  twillio_account_sid = "${var.twillio_account_sid}"
  twillio_auth_token = "${var.twillio_auth_token}"
  twillio_from_phone_number = "${var.twillio_from_phone_number}"
}

module "storage" {
  source = "./storage"
  environment = "${var.environment}"
}