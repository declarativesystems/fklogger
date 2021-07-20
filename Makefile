SHELL := /bin/bash
base_version := $(shell jq .base_version package.json)

include build.mk
include node.mk

test: package.json eslint
	yarn test


.PHONY: must_rebuild print_version

include buildbot.mk
