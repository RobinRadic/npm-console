#!/usr/bin/env bash

dir=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )

node --experimental-specifier-resolution=node "${dir}/cli.js"
