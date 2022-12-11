.PHONY: all

all: asdfInit submodule grinder melos melosInit pnpmInstall

#　git submodule を更新する
submodule:
	git submodule update -i

# Grinder を導入すうる
grinder:
	dart pub global activate grinder

melos:
	dart pub global activate melos

melosInit:
	melos bootstrap

asdfInit:
	asdf install

pnpmInstall:
	pnpm install