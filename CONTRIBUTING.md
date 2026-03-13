# Contributing

## Branch Strategy

- `main`: production branch. Only merged changes should enter this branch.
- `dev`: integration branch for ongoing development.
- `feature/<name>`: feature work branched from `dev`.
- `fix/<name>`: non-urgent bug fixes branched from `dev`.
- `hotfix/<name>`: urgent fixes for production. If used, merge back into both `main` and `dev`.

## Recommended Workflow

1. Update your local `dev`.
2. Create a new branch from `dev`.
3. Implement and test your changes locally.
4. Push your branch to GitHub.
5. Open a pull request into `dev`.
6. After review and CI pass, merge into `dev`.
7. When `dev` is ready for release, open a pull request from `dev` into `main`.
8. After merge into `main`, CI/CD publishes the Docker image and deploys it.

## Local Git Example

```bash
git checkout dev
git pull ecohublu dev
git checkout -b feature/update-homepage
```

After your changes:

```bash
git add .
git commit -m "Update homepage content"
git push -u ecohublu feature/update-homepage
```

Then open a pull request:

- `feature/update-homepage -> dev`

For release:

- `dev -> main`

## Local Development

Install dependencies:

```bash
npm install
```

Run local development server:

```bash
npm run start
```

Build the site:

```bash
npm run build
```

Run with Docker:

```bash
docker compose up --build
```

## CI/CD Behavior

This repository uses [cicd.yml](./.github/workflows/cicd.yml).

- Push to `dev`: run CI only
- Pull request to `dev`: run CI only
- Pull request to `main`: run CI only
- Push to `main`: run CI, build and push Docker image to GHCR, then deploy through the self-hosted runner

## Pull Request Guidelines

- Keep each pull request focused on one change.
- Use clear commit messages.
- Make sure CI passes before merging.
- Do not push directly to `main`.
- Prefer merging into `dev` first unless handling a production hotfix.

## Deployment Notes

- Docker image registry: `ghcr.io/ecohublu/website`
- Deployment uses `docker-compose.deploy.yml`
- Production deployment is triggered only after changes are merged into `main`
