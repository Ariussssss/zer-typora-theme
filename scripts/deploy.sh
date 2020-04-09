#!/usr/bin/env bash

paths="/Users/"$(whoami)'/Library/Application Support/abnerworks.Typora/themes';
paths=${1:-$paths}
echo "🚚 Copy to theme folder.."
echo $paths
cp zer.css "$paths"
