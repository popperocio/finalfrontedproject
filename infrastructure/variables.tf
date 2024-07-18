variable "bucket_name" {
  description = "frontend-testing-bucket"
  type        = string
}

variable "tags" {
  description = "Tags to set on the bucket."
  type        = map(string)
  default     = {}
}