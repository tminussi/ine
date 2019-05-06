resource "aws_iam_role_policy_attachment" "sqsfullaccess" {
    role = "${aws_iam_role.registration_role.name}"
    policy_arn = "arn:aws:iam::aws:policy/AmazonSQSFullAccess"
}

resource "aws_iam_role_policy_attachment" "sqsfullaccess_" {
    role = "${aws_iam_role.email_role.name}"
    policy_arn = "arn:aws:iam::aws:policy/AmazonSQSFullAccess"
}
resource "aws_iam_role_policy_attachment" "sqsfullaccess__" {
    role = "${aws_iam_role.poller_role.name}"
    policy_arn = "arn:aws:iam::aws:policy/AmazonSQSFullAccess"
}