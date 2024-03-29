#!/usr/bin/env bash

set -ex

rm ./contains-circular-symlinks/infinite-b/link-to-a
rm ./contains-circular-symlinks/infinite-a/link-to-b
