build: test
	npm build

test: eslint
	npm test

eslint: node_modules
	npm run eslint

fix_eslint: node_modules
	eslint --fix src

node_modules:
	npm install

clean:
	rm -rf node_modules