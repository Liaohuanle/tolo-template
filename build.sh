
#!/bin/bash
rm -rf ./build

mkdir ./build
cp -r ./views/* ./build/

cd ./build
rm -v *.less