# Building Your Own Zarf CLI

> As mentioned in the [Getting Started page](../../getting-started), a pre-compiled binary is available for arm64 and amd64 machines under the 'Assets' tab of our latest releases on [GitHub](https://github.com/defenseunicorns/zarf/releases). If you don't want to build the CLI yourself you could always download it from there.

If you want to built the CLI from scratch, you can easily do that! In order to build the cli you will need to make sure you have the following dependencies correctly configured:
1. The Zarf repository cloned down `git clone git@github.com:defenseunicorns/zarf.git` or `git clone https://github.com/defenseunicorns/zarf.git`
2. Have Go 1.18.x installed on your PATH (instructions can be found [here](https://go.dev/doc/install))
3. 'make' utility installed on your PATH (this comes default with many OS's)

Once you have the dependencies configured you can build the Zarf CLI by running the following commands:
```bash
cd zarf
make build-cli # This will build binaries for linux, M1 Mac, and Intel Mac machines
               # This puts the built binaries in the ./build directory
```
 > Note: If you know which specific binary type you want you can substitute the `make build-cli` with either `make build-cli-linux` or `make build-cli-mac`.

 Under the hood, the make command is executing a `go build -ldflags="-s -w -X 'github.com/defenseunicorns/zarf/src/config.CLIVersion=$(CLI_VERSION)'" -o ./build/zarf ./src/main.go` command with specific `CGO_ENABLED`, `GOOS`, and `GOARCH` flags depending on the distro and architecture of the system it is building for. The `CLI_VERSION` is set to whatever the latest tag is in the repository as defined by `git describe --tags`.

