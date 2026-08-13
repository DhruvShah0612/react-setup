# 🚀 React EC2 Auto Deployment with AWS CodePipeline, CodeBuild & CodeDeploy

## 📌 Project Overview

This project deploys a **React application automatically to an Ubuntu EC2 instance** whenever code is pushed to a private GitHub repository.

### Final CI/CD Flow

```text
Developer
   │
   │ git push
   ▼
GitHub Private Repository
   │
   │ GitHub Connection / Webhook
   ▼
AWS CodePipeline
   │
   │ Source Stage
   │
   │ Fetch source code from GitHub
   ▼
Source Artifact
   │
   │ CodePipeline stores artifact
   ▼
Temporary S3 Artifact Store
   │
   ▼
AWS CodeBuild
   │
   ├── npm install
   └── npm run build
   │
   ▼
React build/
   │
   ▼
Build Artifact
   │
   ▼
AWS CodeDeploy
   │
   │ Deployment starts
   ▼
CodeDeploy Agent on EC2
   │
   │ Downloads deployment artifact
   ▼
EC2 Ubuntu
   │
   │ Reads appspec.yml
   ▼
appspec.yml
   │
   └── AfterInstall
           └── install.sh
   │
   ▼
/var/www/html/frontend
   │
   ▼
Nginx
   │
   ▼
Browser
```

---

# 🟢 STEP 1 --- Launch EC2 Instance

AWS Console:

```text
EC2
→ Instances
→ Launch Instance
```

## Instance configuration

### Name

```text
react-app-server
```

### AMI

```text
Ubuntu Server 24.04 LTS
```

### Instance Type

For testing:

```text
t3.micro
```

### Key Pair

Create/select:

```text
react-app-key
```

Download the `.pem` file.

---

# 🟢 STEP 2 --- EC2 Security Group

Configure inbound rules.

## Recommended final setup with Nginx

```text
Type           Port   Source
-------------  -----  -----------
SSH              22   0.0.0.0/0
HTTP             80   0.0.0.0/0
HTTPS            443  0.0.0.0/0
```

---

# 🟢 STEP 3 --- Connect to EC2

```bash
ssh -i react-app-key.pem ubuntu@EC2_PUBLIC_IP
```

---

# 🟢 STEP 4 --- Update Ubuntu

```bash
sudo apt update -y
```

```bash
sudo apt upgrade -y
```

---

# 🟢 STEP 5 --- Install Node.js

Example using Node.js 22:

```bash
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
```

Install Node.js:

```bash
sudo apt install -y nodejs
```

Check:

```bash
node -v
```

```bash
npm -v
```

Node.js is required on EC2 if you need Node/npm commands for any deployment-side setup. The React production build itself is created in CodeBuild.

---

# 🟢 STEP 6 --- Install Ruby

CodeDeploy Agent requires Ruby.

```bash
sudo apt install ruby-full -y
```

Check:

```bash
ruby --version
```

---

# 🟢 STEP 7 --- Install CodeDeploy Agent

The example below uses the Mumbai (`ap-south-1`) region.

```bash
cd /home/ubuntu
```

Download the agent installer:

```bash
wget https://aws-codedeploy-ap-south-1.s3.ap-south-1.amazonaws.com/latest/install
```

Make it executable:

```bash
chmod +x install
```

Install:

```bash
sudo ./install auto
```

Start:

```bash
sudo systemctl start codedeploy-agent
```

Enable at boot:

```bash
sudo systemctl enable codedeploy-agent
```

Check:

```bash
sudo systemctl status codedeploy-agent
```

Expected:

```text
Active: active (running)
```

---

# 🟢 STEP 8 --- Create EC2 IAM Role

Go to:

```text
AWS Console
→ IAM
→ Roles
→ Create role
```

## Trusted entity

```text
AWS service
```

## Use case

```text
EC2
```

## Role name

```text
EC2-CodeDeploy-Role
```

Attach the required CodeDeploy EC2 permissions.

For a simple learning setup, the AWS managed policy commonly used is:

```text
AmazonEC2RoleforAWSCodeDeploy
```

Create the role.

---

# 🟢 STEP 9 --- Attach IAM Role to EC2

Go:

```text
EC2
→ Instances
→ Select EC2
→ Actions
→ Security
→ Modify IAM role
```

Select:

```text
EC2-CodeDeploy-Role
```

Save.

---

# 🟢 STEP 10 --- Install Nginx

```bash
sudo apt install nginx -y
```

Start:

```bash
sudo systemctl start nginx
```

Enable:

```bash
sudo systemctl enable nginx
```

Check:

```bash
sudo systemctl status nginx
```

---

# 🟢 STEP 11 --- Configure Nginx

Open:

```bash
sudo nano /etc/nginx/sites-available/default
```

Use:

```nginx
server {
    listen 80;
    server_name _;

    root /var/www/html/frontend;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

Test:

```bash
sudo nginx -t
```

Expected:

```text
syntax is ok
test is successful
```

Restart:

```bash
sudo systemctl restart nginx
```

Nginx serves the React production files from:

```text
/var/www/html/frontend
```

---

# 🟢 STEP 12 --- Create CodeDeploy Service IAM Role

This is the **second IAM role**.

Go:

```text
IAM
→ Roles
→ Create role
```

## Trusted entity

```text
AWS service
```

## Use case

```text
CodeDeploy
```

## Role name

```text
CodeDeploy-Service-Role
```

Attach:

```text
AWSCodeDeployRole
```

Create the role.

---

# 🟢 STEP 13 --- Tag EC2

Tag the EC2 instance.

Example:

```text
Key: Environment
Value: dev
```

So:

```text
Environment = dev
```

This tag can be used by CodeDeploy to identify the target EC2 instance.

---

# 🟢 STEP 14 --- Create CodeDeploy Application

Go:

```text
AWS Console
→ CodeDeploy
→ Applications
→ Create application
```

## Application name

```text
react-app
```

## Compute platform

```text
EC2/On-premises
```

Create application.

---

# 🟢 STEP 15 --- Create CodeDeploy Deployment Group

Inside:

```text
react-app
```

Choose:

```text
Create deployment group
```

## Deployment group name

```text
react-app-dg
```

## Service role

Select:

```text
CodeDeploy-Service-Role
```

## Environment

Select:

```text
Amazon EC2 instances
```

## Target instances

Use EC2 tags.

Example:

```text
Key: Environment
Value: dev
```

This selects the EC2 instance with:

```text
Environment = dev
```

## Deployment configuration

For the simple setup:

```text
CodeDeployDefault.AllAtOnce
```

Create the deployment group.

---

# 🟢 STEP 20 --- Create CodeBuild Project

Go:

```text
AWS Console
→ CodeBuild
→ Build projects
→ Create build project
```

## Project name

```text
react-app-build
```

## Project type

```text
Default project
```

## Source

For this pipeline, the source is provided by CodePipeline.

```text
Source provider:
No source
```

When CodeBuild is used as a CodePipeline Build action, CodePipeline passes the source artifact to CodeBuild.

## Environment

```text
Provisioning model:
On-demand
```

```text
Environment image:
Managed image
```

```text
Compute:
EC2
```

```text
Running mode:
Container
```

```text
Operating system:
Amazon Linux
```

```text
Runtime:
Standard
```

Example image:

```text
aws/codebuild/amazonlinux-x86_64-standard:6.0
```

## Service role

Select:

```text
New service role
```

Example:

```text
codebuild-react-app-service-role
```

This role is for **CodeBuild itself**.

## Buildspec

Select:

```text
Use a buildspec file
```

CodeBuild reads:

```text
buildspec.yml
```

## Artifacts

When CodeBuild is used inside CodePipeline, configure the CodePipeline Build action to receive the build output.

The important output for this React deployment is:

```text
appspec.yml
scripts/**/*
build/**/*
```

---

# 🟢 STEP 21 --- Create CodePipeline

Go:

```text
AWS Console
→ CodePipeline
→ Create pipeline
```

## Pipeline name

```text
react-app-pipeline
```

---

# 🟢 STEP 22 --- CodePipeline Execution Mode

Select:

```text
Queued
```

---

# 🟢 STEP 23 --- CodePipeline Service Role

Select:

```text
New service role
```

Example generated role:

```text
AWSCodePipelineServiceRole-ap-south-1-react-app-pipeline
```

Keep:

```text
Allow AWS CodePipeline to create a service role
```

checked.

This role is for **CodePipeline itself**.

---

# 🟢 STEP 24 --- Add GitHub Source

For the source provider choose:

```text
GitHub via CodeConnections / GitHub App
```

Choose:

```text
Connect to GitHub
```

## Connection name

```text
github-connection
```

Choose:

```text
Install a new app
```

GitHub will open.

Select:

```text
Only select repositories
```

Select your React repository:

```text
react-app
```

Install/authorize the GitHub App.

Return to AWS and select the installation.

---

# 🟢 STEP 25 --- Select GitHub Repository

Select:

```text
Repository:
YOUR_USERNAME/react-app
```

Branch:

```text
main
```

Use `master` only if your actual GitHub repository branch is `master`.

---

# 🟢 STEP 26 --- Source Artifact Format

Select:

```text
CodePipeline default
```

For this setup, the default ZIP source artifact is sufficient.

---

# 🟢 STEP 27 --- Automatic Trigger

Keep automatic trigger/webhook enabled.

For the GitHub source:

```text
Start your pipeline on push events
```

The desired behavior is:

```text
git push
   ↓
GitHub webhook
   ↓
CodePipeline
```

No manual pipeline start is required.

---

# 🟢 STEP 28 --- Build Stage

Select:

```text
AWS CodeBuild
```

Choose the project:

```text
react-app-build
```

Set the input artifact from Source:

```text
SourceArtifact
```

Set the output artifact:

```text
BuildArtifact
```

The flow is:

```text
SourceArtifact
      ↓
CodeBuild
      ↓
npm install
      ↓
npm run build
      ↓
build/
      ↓
BuildArtifact
```

---

# 🟢 STEP 29 --- Test Stage

For this basic project:

```text
Skip test stage
```

Tests can be added later.

---

# 🟢 STEP 30 --- Deploy Stage

Select:

```text
Deploy provider:
AWS CodeDeploy
```

Region:

```text
Asia Pacific (Mumbai)
```

Input artifact:

```text
BuildArtifact
```

Application name:

```text
react-app
```

Deployment group:

```text
react-app-dg
```

Enable:

```text
Configure automatic rollback on stage failure
```

Keep it enabled.

---

# 🟢 STEP 31 --- Create Pipeline

Review the configuration.

Expected:

```text
Source:
GitHub private repository
        ↓
SourceArtifact
        ↓
Build:
AWS CodeBuild
        ↓
BuildArtifact
        ↓
Deploy:
AWS CodeDeploy
        ↓
Application:
react-app
        ↓
Deployment Group:
react-app-dg
        ↓
EC2
        ↓
/var/www/html/frontend
        ↓
Nginx
        ↓
Browser
```

Click:

```text
Create pipeline
```

---
