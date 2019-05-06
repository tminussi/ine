resource "aws_iam_role" "poller_role" {
    assume_role_policy = "${data.template_file.assume_role_template.template}"
    name = "${var.environment}-poller-role"
}