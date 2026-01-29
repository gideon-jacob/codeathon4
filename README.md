# Codeathon 4.O 

## Deployment

This project includes a GitHub Actions workflow `.github/workflows/deploy.yml` for automatic deployment to AWS S3 and CloudFront.

### Prerequisites

To enable deployment, you must set the following **Repository Secrets** in your GitHub repository settings:

- `AWS_ACCESS_KEY_ID`: Your AWS Access Key ID.
- `AWS_SECRET_ACCESS_KEY`: Your AWS Secret Access Key.
- `AWS_REGION`: The AWS region where your resources are located (e.g., `us-east-1`).
- `S3_BUCKET_NAME`: The name of the S3 bucket to deploy to.
- `CLOUDFRONT_DISTRIBUTION_ID`: The ID of your CloudFront distribution for cache invalidation.
