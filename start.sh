#!/bin/bash
rm -rf .next
next build
PORT=3031 next start