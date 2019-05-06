resource "aws_iam_role" "registration_role" {
    assume_role_policy = "${data.template_file.assume_role_template.template}"
    name = "${var.environment}-registration-role"
}