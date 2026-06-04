# GitOps-Platform-on-AKS-2026

enterprise-gitops-platform/

├── application/
│   ├── src/
│   │   ├── app.js
│   │   ├── package.json
│   │   └── Dockerfile
│
├── helm/
│   └── enterprise-app/
│       ├── Chart.yaml
│       ├── values.yaml
│       └── templates/
│           ├── deployment.yaml
│           ├── service.yaml
│           ├── ingress.yaml
│           ├── hpa.yaml
│           ├── secretproviderclass.yaml
│           └── serviceaccount.yaml
│
├── argocd/
│   ├── application.yaml
│   └── project.yaml
│
├── github-actions/
│   └── deploy.yml
│
├── monitoring/
│   ├── prometheus-values.yaml
│   └── grafana-values.yaml
│
└── scripts/
    ├── aks.sh
    ├── acr.sh
    ├── keyvault.sh
    └── argocd.sh
