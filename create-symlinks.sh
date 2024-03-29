#!/usr/bin/env bash

set -ex

ln -s ../infinite-a ./contains-circular-symlinks/infinite-b/link-to-a

ln -s ../infinite-b ./contains-circular-symlinks/infinite-a/link-to-b
