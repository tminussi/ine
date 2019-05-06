resource "aws_cloudformation_stack" "ine_outputs" {
  name = "${var.environment}-ine-outputs"

  template_body = <<STACK
{
  "Resources" : {
    "IneQueue" : {
      "Type" : "AWS::SQS::Queue",
      "Properties" : {
         "QueueName" : "IneNotificationsQueue"
      }
    }
  },
  "Outputs" : {
    "QueueURL" : {
      "Description" : "URL of IneQueue",
      "Value" : { "Ref" : "IneQueue" }
    },
    "QueueARN" : {
      "Description" : "ARN of IneQueue",
      "Value" : { "Fn::GetAtt" : ["IneQueue", "Arn"]}
    },
    "QueueName" : {
      "Description" : "IneQueue's Name",
      "Value" : { "Fn::GetAtt" : ["IneQueue", "QueueName"]}
    },
    "RoleARN": {
      "Description": "Registration Role ARN",
      "Value": "${var.registration_role_arn}"
    },
    "IneRegistrationsTableName": {
      "Description": "Table for INE Registrations",
      "Value": "${var.ine_registrations_table}"
    },
    "IneNotificationsTableName": {
      "Description": "Table for INE Notifications",
      "Value": "${var.ine_notifications_table}"
    },
    "EmailRoleARN": {
      "Description": "ARN for Email ROle",
      "Value": "${var.email_role_arn}"
    },
    "PollerRoleARN": {
      "Description": "ARN for Poller Role",
      "Value": "${var.poller_role_arn}"
    },
    "TwillioFromPhoneNumber": {
      "Description": "Phone number configured in Twillio",
      "Value": "${var.twillio_from_phone_number}"
    },
    "TwillioAccountSid": {
      "Description": "Twillio Account SID",
      "Value": "${var.twillio_account_sid}"
    },
    "TwillioAuthToken": {
      "Description": "Twillio Auth Token",
      "Value": "${var.twillio_auth_token}"
    }
  }
}
STACK
}