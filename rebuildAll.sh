#!/usr/bin/env bash

dir=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )

function rebuild {
    echo ""
    echo "=== [$1] ==="
    echo "cd $PWD"

    echo "rm -rf lib/ types/"
    rm -rf lib/ types/

    echo "rimraf src/**/*.{js,js.map,d.ts}"
    rimraf src/**/*.{js,js.map,d.ts}

    echo "tsc --project tsconfig.build.json"
    tsc --project tsconfig.build.json  &>/dev/null

    echo "===================="
    echo ""
}
function rebuild:p {
    cd $dir/packages/$1
    rebuild $1
}

function rebuild:a {
    cd $dir/apps/$1
    rebuild $1
}

rebuild:p shared
rebuild:p core
rebuild:p console-colors
rebuild:p console-input
rebuild:p console-output
rebuild:p console
rebuild:p hosting
rebuild:p multi-package-json-manager

rebuild:a hosting-cli
rebuild:a mono-cli

echo "All (if any) errors have been hidden during this process."
