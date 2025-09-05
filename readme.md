> **Note:** Replace anything inside `[ ]` with your own value.

### Docker & Kubernetes Learning Projects 🐋☸️

This repo contains a collection of projects I built while exploring containerization, orchestration, and deployment techniques. Each project serves as a hands-on exercise to understand key concepts, experiment with tools, and gain practical experience in modern DevOps practices.

### What You’ll Find Here

Docker Projects: Learn how to containerize applications, manage images, and work with Docker Compose.

Kubernetes Projects: Explore deploying applications on Kubernetes clusters, managing pods, services, and configurations.

Experimentation: Play with different configurations, networking setups, and scaling scenarios.

### Purpose

The goal of this repository is to document my learning journey, provide examples of real setups, and share practical knowledge for anyone interested in mastering Docker and Kubernetes.

### Docker & Kubernetes commands

#### docker on production (amazon ec2) 🐋

##### Install Docker

1. `sudo yum update -y`
2. `sudo yum -y install docker`
3. `sudo service docker start`
4. `sudo usermod -a -G docker ec2-`
5. ==log out + back in==
6. `sudo systemctl enable docker`
7. `docker version`

#### Install Docker Compose

1. `sudo curl -L https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose`
2. `sudo chmod +x /usr/local/bin/docker-compose` (Make the `docker-compose` file runnable as a program)
3. `docker-compose version`

#### kubernetes ☸️

##### minikube

- Install minikube (you get minikube + kubectl CLIs)

1. `minikube start --driver=docker` (Start a VM)
2. `minikube status`
3. `minikube dashboard`
4. `minikube service first-app` (create a service for your deployment)

##### kubectl

- `kubectl create deployment [name] --image=[image-repo]` (Create deployment) (dockerhub)
- `kubectl get deployments; kubectl get pods`
- `kubectl delete deployment [name]` (delete deployment)
- `kubectl expose deployment [deployment-name] --type=LoadBalancer --port=8080`
- `kubectl get services`
- `kubectl scale deployment/[deployment-name] --replicas=3`
- `kubectl set image deployment/[deployment-name] [container-name]=[new-image]:[new-tag]`
- `kubectl rollout status deployment/first-app` (view updating status)
- `kubectl rollout undo deployment/[deployment-name] --to-revision=1`
- `kubectl rollout history deployment/[deployment-name] --revision=3`
- `kubectl apply -f=[file-name].yaml`
- `kubectl delete -f=[file-name].yaml`
