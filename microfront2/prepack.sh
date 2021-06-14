#!/bin/bash

#
# !!!Aviso!!!
#
# Como essa poc é um projeto simples estou utilizando bash,
# **não recomendo** escalar esse script, utilize outros métodos para criar seu tarball
# você pode usar ruby ou nodejs
#
rm -rf tarball

mkdir tarball
mkdir tarball/router

# copy package.json
cp package.json tarball
cp src/index.js tarball

# copy pages
cp -R src/pages tarball

# copy router names and navigators
cp src/router/route-names.js tarball/router
cp src/router/*-navigator.js tarball/router

# store
cp -R src/store tarball