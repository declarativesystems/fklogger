SHELL := /bin/bash
base_version := $(shell jq .base_version package.json)
git_rev := $(shell git rev-parse --short HEAD)

# remove leading 'v'
git_tag := $(shell git describe --tags | cut -c 2-)

ifeq ($(strip "$(git_tag)"), $(base_version))
	# on a release tag that matches base_version - tag is good
	final_version = $(git_tag)
else
	# tag is bogus or this is a snapshot build
	final_version = $(base_version)-$(git_rev)
endif

build: test
	npm run-script build

test: package.json eslint
	npm test

eslint: node_modules
	npm run eslint

fix_eslint: node_modules
	eslint --fix src

print_version: must_rebuild
	@echo $(final_version)

package.json: must_rebuild
	cat <<< $$(jq ".version = \"$(final_version)\"" package.json) > package.json

node_modules:
	yarn install

clean:
	rm -rf node_modules
	rm -rf dist
	rm -f yarn.lock

.PHONY: must_rebuild print_version
