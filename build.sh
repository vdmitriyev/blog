#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

source ../.venv/bin/activate

pelican
pelican -s publishconf.py
