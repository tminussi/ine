resource "aws_iam_role" "email_role" {
    assume_role_policy = "${data.template_file.assume_role_template.template}"
    name = "${var.environment}-email-role"
}