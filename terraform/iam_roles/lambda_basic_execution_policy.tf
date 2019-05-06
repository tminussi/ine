resource "aws_iam_role_policy_attachment" "lambda_basic_execution_policy" {
    role = "${aws_iam_role.registration_role.name}"
    policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
}

resource "aws_iam_role_policy_attachment" "lambda_basic_execution_policy_" {
    role = "${aws_iam_role.email_role.name}"
    policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
}