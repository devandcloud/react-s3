terraform {
  backend "s3" {
    bucket         = "devandcloud-tfstate" # change avec ton bucket
    key            = "live/terraform.tfstate"
    region         = "eu-west-1"
    dynamodb_table = "devandcloud-lock" # change si besoin
    encrypt        = true
  }
}
