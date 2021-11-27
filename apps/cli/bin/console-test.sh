#!/usr/bin/env bash

dir=$( cd $(dirname $(readlink `[[ $OSTYPE == linux* ]] && echo "-f"` $0)) ; pwd -P)

node --experimental-specifier-resolution=node "${dir}/cli.js"
