resource "aws_iam_role_policy_attachment" "dynamodbfullaccess" {
    role = "${aws_iam_role.registration_role.name}"
    policy_arn = "arn:aws:iam::aws:policy/AmazonDynamoDBFullAccess"
}

resource "aws_iam_role_policy_attachment" "dynamodbfullaccess_" {
    role = "${aws_iam_role.poller_role.name}"
    policy_arn = "arn:aws:iam::aws:policy/AmazonDynamoDBFullAccess"
}