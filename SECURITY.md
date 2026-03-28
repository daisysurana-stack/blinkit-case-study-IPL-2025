# Security Policy

## Supported Versions

This repository is actively maintained on the `main` branch.

## Reporting a Vulnerability

If you believe you have found a security issue, do not open a public issue.

Please report it privately to the repository owner through GitHub security reporting or a private email channel. Include:

- A short description of the issue
- Steps to reproduce it
- The affected files or routes
- Any screenshots or logs that help explain the problem

## Security Baseline

This project is intended to follow these rules:

- No secrets, tokens, or credentials should be committed to git
- Environment variables should stay in local `.env` files that are not tracked
- Pull requests should be reviewed before merging to `main`
- Dependency and code scanning should stay enabled in GitHub
