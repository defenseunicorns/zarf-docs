# Building Zarf Packages

The process of defining a package is covered in the [Creating Your Own Package](../zarf-advanced/creating-your-own-package) page. Assuming you have a package already defined, building the package itself is fairly simple. 

`zarf package create` will look for a `zarf.yaml` file in the current directory and build the package from that file. Behind the scenes, this is pulling down all the resources it needs from the internet and placing them in a temporary directory, once all the necessary resources of retrieved, Zarf will create the tarball of the temp directory and clean up the temp directory.

