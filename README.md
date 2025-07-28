# Pairing playground

[![Tests](https://github.com/saramic/pairing-playground/actions/workflows/tests.yml/badge.svg)](https://github.com/saramic/pairing-playground/actions/workflows/tests.yml)

## TL;DR

setup the repo

```sh
git clone git@github.com:saramic/pairing-playground.git
cd pairing-playground

nvm use
```

run lint, formatting and tests

```sh
make                # show usage instructions
make build          # run simple build
make full-build     # run full build including E2E tests
```

run the server

```sh
npm run dev
open http://localhost:5174/

curl http://localhost:5174/api/health
```

## Architecture

- [docs/SETUP.md](docs/SETUP.md)
