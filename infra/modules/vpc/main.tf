data "aws_availability_zones" "available" {
  state = "available"
}

resource "aws_vpc" "this" {
  cidr_block           = var.vpc_cidr
  enable_dns_support   = true
  enable_dns_hostnames = true

  tags = merge({
    Name = "${var.tags["stage"]}-vpc"
  }, var.tags)
}

resource "aws_internet_gateway" "this" {
  vpc_id = aws_vpc.this.id

  tags = merge({
    Name = "${var.tags["stage"]}-igw"
  }, var.tags)
}

resource "aws_route_table" "public" {
  vpc_id = aws_vpc.this.id

  tags = merge({
    Name = "${var.tags["stage"]}-public-rt"
  }, var.tags)
}

resource "aws_route" "internet_access" {
  route_table_id         = aws_route_table.public.id
  destination_cidr_block = "0.0.0.0/0"
  gateway_id             = aws_internet_gateway.this.id
}

resource "aws_subnet" "public" {
  count = length(var.public_subnets)

  vpc_id                  = aws_vpc.this.id
  cidr_block              = var.public_subnets[count.index]
  map_public_ip_on_launch = true
  availability_zone       = element(data.aws_availability_zones.available.names, count.index)

  tags = merge({
    Name = "${var.tags["stage"]}-public-subnet-${count.index}"
  }, var.tags)
}

resource "aws_route_table_association" "public" {
  count          = length(var.public_subnets)
  subnet_id      = aws_subnet.public[count.index].id
  route_table_id = aws_route_table.public.id
}

resource "aws_subnet" "private" {
  count = length(var.private_subnets)

  vpc_id            = aws_vpc.this.id
  cidr_block        = var.private_subnets[count.index]
  availability_zone = element(data.aws_availability_zones.available.names, count.index)

  tags = merge({
    Name = "${var.tags["stage"]}-private-subnet-${count.index}"
  }, var.tags)
}
