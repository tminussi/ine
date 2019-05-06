resource "aws_iam_role_policy_attachment" "sesfullaccess" {
    role = "${aws_iam_role.email_role.name}"
    policy_arn = "arn:aws:iam::aws:policy/AmazonSESFullAccess"
}