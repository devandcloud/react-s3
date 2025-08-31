data "aws_vpc" "selected" {
  id = var.vpc_id
}

data "aws_subnets" "private" {
  filter {
    name   = "vpc-id"
    values = [var.vpc_id]
  }
  
  tags = {
    Tier = "private"
  }
}

data "aws_subnets" "public" {
  filter {
    name   = "vpc-id"
    values = [var.vpc_id]
  }
  
  tags = {
    Tier = "public"
  }
}

data "aws_subnet" "private" {
  for_each = toset(data.aws_subnets.private.ids)
  id       = each.value
}

data "aws_subnet" "public" {
  for_each = toset(data.aws_subnets.public.ids)
  id       = each.value
}

output "vpc_id" {
  value = data.aws_vpc.selected.id
}

output "private_subnet_ids" {
  value = [for s in data.aws_subnet.private : s.id]
}

output "public_subnet_ids" {
  value = [for s in data.aws_subnet.public : s.id]
}

output "vpc_cidr_block" {
  value = data.aws_vpc.selected.cidr_block
}
