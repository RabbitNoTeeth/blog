(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{328:function(e,t,a){"use strict";a.r(t);var n=a(7),i=Object(n.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#镜像"}},[e._v("#")]),e._v(" 镜像")]),e._v(" "),t("h3",{attrs:{id:"下载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载"}},[e._v("#")]),e._v(" 下载")]),e._v(" "),t("p",[e._v("从仓库（公共仓库或者私有仓库）拉取镜像。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("docker pull [OPTIONS] NAME[:TAG|@DIGEST]\n")])])]),t("p",[t("strong",[e._v("Options:")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("  -a, --all-tags                Download all tagged images in the repository\n      --disable-content-trust   Skip image verification (default true)\n      --help                    Print usage\n")])])]),t("h3",{attrs:{id:"构建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#构建"}},[e._v("#")]),e._v(" 构建")]),e._v(" "),t("p",[e._v("从Dockerfile构建镜像")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("docker build [OPTIONS] PATH | URL | -\n")])])]),t("p",[t("strong",[e._v("Options:")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("      --build-arg list             Set build-time variables (default [])\n      --cache-from stringSlice     Images to consider as cache sources\n      --cgroup-parent string       Optional parent cgroup for the container\n      --compress                   Compress the build context using gzip\n      --cpu-period int             Limit the CPU CFS (Completely Fair Scheduler) period\n      --cpu-quota int              Limit the CPU CFS (Completely Fair Scheduler) quota\n  -c, --cpu-shares int             CPU shares (relative weight)\n      --cpuset-cpus string         CPUs in which to allow execution (0-3, 0,1)\n      --cpuset-mems string         MEMs in which to allow execution (0-3, 0,1)\n      --disable-content-trust      Skip image verification (default true)\n  -f, --file string                Name of the Dockerfile (Default is 'PATH/Dockerfile')\n      --force-rm                   Always remove intermediate containers\n      --help                       Print usage\n      --isolation string           Container isolation technology\n      --label list                 Set metadata for an image (default [])\n  -m, --memory string              Memory limit\n      --memory-swap string         Swap limit equal to memory plus swap: '-1' to enable unlimited swap\n      --network string             Set the networking mode for the RUN instructions during build (default \"default\")\n      --no-cache                   Do not use cache when building the image\n      --pull                       Always attempt to pull a newer version of the image\n  -q, --quiet                      Suppress the build output and print image ID on success\n      --rm                         Remove intermediate containers after a successful build (default true)\n      --security-opt stringSlice   Security options\n      --shm-size string            Size of /dev/shm, default value is 64MB\n  -t, --tag list                   Name and optionally a tag in the 'name:tag' format (default [])\n      --ulimit ulimit              Ulimit options (default [])\n  -v, --volume list                Set build-time bind mounts (default [])\n")])])]),t("p",[t("code",[e._v("docker build")]),e._v(" 指令默认从当前目录下查找 Dockerfile 文件进行构建，可以通过 -f 来指定 Dockerfile 文件位置。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ cd /home\n$ docker build -t aaa .\t\t\t\t# 从 /home 目录下查找 Dockerfile 文件进行构建\n$ docker build -f /opt -t bbb .\t\t# 从 /opt 目录下查找 Dockerfile 文件进行构建\n")])])]),t("h3",{attrs:{id:"导出"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#导出"}},[e._v("#")]),e._v(" 导出")]),e._v(" "),t("p",[e._v("将指定镜像导出保存成tar文件。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("docker save [OPTIONS] IMAGE [IMAGE...]\n")])])]),t("p",[t("strong",[e._v("Options:")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("      --help            Print usage\n  -o, --output string   Write to a file, instead of STDOUT\n")])])]),t("h3",{attrs:{id:"导入"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#导入"}},[e._v("#")]),e._v(" 导入")]),e._v(" "),t("p",[e._v("导入tar镜像文件")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("docker load [OPTIONS]\n")])])]),t("p",[t("strong",[e._v("Options:")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("      --help           Print usage\n  -i, --input string   Read from tar archive file, instead of STDIN\n  -q, --quiet          Suppress the load output\n")])])]),t("h3",{attrs:{id:"删除"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除"}},[e._v("#")]),e._v(" 删除")]),e._v(" "),t("p",[e._v("删除一个或者多个镜像。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("docker rmi [OPTIONS] IMAGE [IMAGE...]\n")])])]),t("p",[t("strong",[e._v("Options:")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("  -f, --force      强制删除镜像，同时删除由该镜像创建的容器。（如果有正在运行的容器，那么会删除失败）\n      --help       Print usage\n      --no-prune   Do not delete untagged parents\n")])])]),t("h3",{attrs:{id:"查看信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看信息"}},[e._v("#")]),e._v(" 查看信息")]),e._v(" "),t("p",[e._v("查看镜像信息")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("docker inspect [OPTIONS] NAME|ID [NAME|ID...]\n")])])]),t("p",[t("strong",[e._v("Options:")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("  -f, --format string   Format the output using the given Go template\n  -s, --size            Display total file sizes if the type is container\n      --type string     Return JSON for specified type\n")])])]),t("h2",{attrs:{id:"容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#容器"}},[e._v("#")]),e._v(" 容器")]),e._v(" "),t("h3",{attrs:{id:"创建并运行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建并运行"}},[e._v("#")]),e._v(" 创建并运行")]),e._v(" "),t("p",[e._v("创建一个新的容器并运行（查看【"),t("a",{attrs:{href:"docker_run%E8%AF%A6%E8%A7%A3"}},[e._v("docker run 参数详解")]),e._v("】了解端口映射、磁盘挂载、后台运行等常用操作）")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("docker run [OPTIONS] IMAGE [COMMAND] [ARG...]\n")])])]),t("p",[t("strong",[e._v("Options：")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('      --add-host list                         Add a custom host-to-IP mapping (host:ip) (default [])\n  -a, --attach list                           Attach to STDIN, STDOUT or STDERR (default [])\n      --blkio-weight uint16                   Block IO (relative weight), between 10 and 1000, or 0 to disable (default 0)\n      --blkio-weight-device weighted-device   Block IO weight (relative device weight) (default [])\n      --cap-add list                          Add Linux capabilities (default [])\n      --cap-drop list                         Drop Linux capabilities (default [])\n      --cgroup-parent string                  Optional parent cgroup for the container\n      --cidfile string                        Write the container ID to the file\n      --cpu-count int                         CPU count (Windows only)\n      --cpu-percent int                       CPU percent (Windows only)\n      --cpu-period int                        Limit CPU CFS (Completely Fair Scheduler) period\n      --cpu-quota int                         Limit CPU CFS (Completely Fair Scheduler) quota\n      --cpu-rt-period int                     Limit CPU real-time period in microseconds\n      --cpu-rt-runtime int                    Limit CPU real-time runtime in microseconds\n  -c, --cpu-shares int                        CPU shares (relative weight)\n      --cpus decimal                          Number of CPUs (default 0.000)\n      --cpuset-cpus string                    CPUs in which to allow execution (0-3, 0,1)\n      --cpuset-mems string                    MEMs in which to allow execution (0-3, 0,1)\n      --credentialspec string                 Credential spec for managed service account (Windows only)\n  -d, --detach                                Run container in background and print container ID\n      --detach-keys string                    Override the key sequence for detaching a container\n      --device list                           Add a host device to the container (default [])\n      --device-read-bps throttled-device      Limit read rate (bytes per second) from a device (default [])\n      --device-read-iops throttled-device     Limit read rate (IO per second) from a device (default [])\n      --device-write-bps throttled-device     Limit write rate (bytes per second) to a device (default [])\n      --device-write-iops throttled-device    Limit write rate (IO per second) to a device (default [])\n      --disable-content-trust                 Skip image verification (default true)\n      --dns list                              Set custom DNS servers (default [])\n      --dns-option list                       Set DNS options (default [])\n      --dns-search list                       Set custom DNS search domains (default [])\n      --entrypoint string                     Overwrite the default ENTRYPOINT of the image\n  -e, --env list                              Set environment variables (default [])\n      --env-file list                         Read in a file of environment variables (default [])\n      --expose list                           Expose a port or a range of ports (default [])\n      --group-add list                        Add additional groups to join (default [])\n      --health-cmd string                     Command to run to check health\n      --health-interval duration              Time between running the check (ns|us|ms|s|m|h) (default 0s)\n      --health-retries int                    Consecutive failures needed to report unhealthy\n      --health-timeout duration               Maximum time to allow one check to run (ns|us|ms|s|m|h) (default 0s)\n      --help                                  Print usage\n  -h, --hostname string                       Container host name\n      --init                                  Run an init inside the container that forwards signals and reaps processes\n      --init-path string                      Path to the docker-init binary\n  -i, --interactive                           Keep STDIN open even if not attached\n      --io-maxbandwidth string                Maximum IO bandwidth limit for the system drive (Windows only)\n      --io-maxiops uint                       Maximum IOps limit for the system drive (Windows only)\n      --ip string                             Container IPv4 address (e.g. 172.30.100.104)\n      --ip6 string                            Container IPv6 address (e.g. 2001:db8::33)\n      --ipc string                            IPC namespace to use\n      --isolation string                      Container isolation technology\n      --kernel-memory string                  Kernel memory limit\n  -l, --label list                            Set meta data on a container (default [])\n      --label-file list                       Read in a line delimited file of labels (default [])\n      --link list                             Add link to another container (default [])\n      --link-local-ip list                    Container IPv4/IPv6 link-local addresses (default [])\n      --log-driver string                     Logging driver for the container\n      --log-opt list                          Log driver options (default [])\n      --mac-address string                    Container MAC address (e.g. 92:d0:c6:0a:29:33)\n  -m, --memory string                         Memory limit\n      --memory-reservation string             Memory soft limit\n      --memory-swap string                    Swap limit equal to memory plus swap: \'-1\' to enable unlimited swap\n      --memory-swappiness int                 Tune container memory swappiness (0 to 100) (default -1)\n      --name string                           Assign a name to the container\n      --network string                        Connect a container to a network (default "default")\n      --network-alias list                    Add network-scoped alias for the container (default [])\n      --no-healthcheck                        Disable any container-specified HEALTHCHECK\n      --oom-kill-disable                      Disable OOM Killer\n      --oom-score-adj int                     Tune host\'s OOM preferences (-1000 to 1000)\n      --pid string                            PID namespace to use\n      --pids-limit int                        Tune container pids limit (set -1 for unlimited)\n      --privileged                            Give extended privileges to this container\n  -p, --publish list                          Publish a container\'s port(s) to the host (default [])\n  -P, --publish-all                           Publish all exposed ports to random ports\n      --read-only                             Mount the container\'s root filesystem as read only\n      --restart string                        Restart policy to apply when a container exits (default "no")\n      --rm                                    Automatically remove the container when it exits\n      --runtime string                        Runtime to use for this container\n      --security-opt list                     Security Options (default [])\n      --shm-size string                       Size of /dev/shm, default value is 64MB\n      --sig-proxy                             Proxy received signals to the process (default true)\n      --stop-signal string                    Signal to stop a container, SIGTERM by default (default "SIGTERM")\n      --stop-timeout int                      Timeout (in seconds) to stop a container\n      --storage-opt list                      Storage driver options for the container (default [])\n      --sysctl map                            Sysctl options (default map[])\n      --tmpfs list                            Mount a tmpfs directory (default [])\n  -t, --tty                                   Allocate a pseudo-TTY\n      --ulimit ulimit                         Ulimit options (default [])\n  -u, --user string                           Username or UID (format: <name|uid>[:<group|gid>])\n      --userns string                         User namespace to use\n      --uts string                            UTS namespace to use\n  -v, --volume list                           Bind mount a volume (default [])\n      --volume-driver string                  Optional volume driver for the container\n      --volumes-from list                     Mount volumes from the specified container(s) (default [])\n  -w, --workdir string                        Working directory inside the container\n')])])]),t("h3",{attrs:{id:"创建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建"}},[e._v("#")]),e._v(" 创建")]),e._v(" "),t("p",[e._v("创建一个新的容器，但是不运行")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("docker create [OPTIONS] IMAGE [COMMAND] [ARG...]\n")])])]),t("p",[t("strong",[e._v("Options:")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('      --add-host list                         Add a custom host-to-IP mapping (host:ip) (default [])\n  -a, --attach list                           Attach to STDIN, STDOUT or STDERR (default [])\n      --blkio-weight uint16                   Block IO (relative weight), between 10 and 1000, or 0 to disable (default 0)\n      --blkio-weight-device weighted-device   Block IO weight (relative device weight) (default [])\n      --cap-add list                          Add Linux capabilities (default [])\n      --cap-drop list                         Drop Linux capabilities (default [])\n      --cgroup-parent string                  Optional parent cgroup for the container\n      --cidfile string                        Write the container ID to the file\n      --cpu-count int                         CPU count (Windows only)\n      --cpu-percent int                       CPU percent (Windows only)\n      --cpu-period int                        Limit CPU CFS (Completely Fair Scheduler) period\n      --cpu-quota int                         Limit CPU CFS (Completely Fair Scheduler) quota\n      --cpu-rt-period int                     Limit CPU real-time period in microseconds\n      --cpu-rt-runtime int                    Limit CPU real-time runtime in microseconds\n  -c, --cpu-shares int                        CPU shares (relative weight)\n      --cpus decimal                          Number of CPUs (default 0.000)\n      --cpuset-cpus string                    CPUs in which to allow execution (0-3, 0,1)\n      --cpuset-mems string                    MEMs in which to allow execution (0-3, 0,1)\n      --credentialspec string                 Credential spec for managed service account (Windows only)\n      --device list                           Add a host device to the container (default [])\n      --device-read-bps throttled-device      Limit read rate (bytes per second) from a device (default [])\n      --device-read-iops throttled-device     Limit read rate (IO per second) from a device (default [])\n      --device-write-bps throttled-device     Limit write rate (bytes per second) to a device (default [])\n      --device-write-iops throttled-device    Limit write rate (IO per second) to a device (default [])\n      --disable-content-trust                 Skip image verification (default true)\n      --dns list                              Set custom DNS servers (default [])\n      --dns-option list                       Set DNS options (default [])\n      --dns-search list                       Set custom DNS search domains (default [])\n      --entrypoint string                     Overwrite the default ENTRYPOINT of the image\n  -e, --env list                              Set environment variables (default [])\n      --env-file list                         Read in a file of environment variables (default [])\n      --expose list                           Expose a port or a range of ports (default [])\n      --group-add list                        Add additional groups to join (default [])\n      --health-cmd string                     Command to run to check health\n      --health-interval duration              Time between running the check (ns|us|ms|s|m|h) (default 0s)\n      --health-retries int                    Consecutive failures needed to report unhealthy\n      --health-timeout duration               Maximum time to allow one check to run (ns|us|ms|s|m|h) (default 0s)\n      --help                                  Print usage\n  -h, --hostname string                       Container host name\n      --init                                  Run an init inside the container that forwards signals and reaps processes\n      --init-path string                      Path to the docker-init binary\n  -i, --interactive                           Keep STDIN open even if not attached\n      --io-maxbandwidth string                Maximum IO bandwidth limit for the system drive (Windows only)\n      --io-maxiops uint                       Maximum IOps limit for the system drive (Windows only)\n      --ip string                             Container IPv4 address (e.g. 172.30.100.104)\n      --ip6 string                            Container IPv6 address (e.g. 2001:db8::33)\n      --ipc string                            IPC namespace to use\n      --isolation string                      Container isolation technology\n      --kernel-memory string                  Kernel memory limit\n  -l, --label list                            Set meta data on a container (default [])\n      --label-file list                       Read in a line delimited file of labels (default [])\n      --link list                             Add link to another container (default [])\n      --link-local-ip list                    Container IPv4/IPv6 link-local addresses (default [])\n      --log-driver string                     Logging driver for the container\n      --log-opt list                          Log driver options (default [])\n      --mac-address string                    Container MAC address (e.g. 92:d0:c6:0a:29:33)\n  -m, --memory string                         Memory limit\n      --memory-reservation string             Memory soft limit\n      --memory-swap string                    Swap limit equal to memory plus swap: \'-1\' to enable unlimited swap\n      --memory-swappiness int                 Tune container memory swappiness (0 to 100) (default -1)\n      --name string                           Assign a name to the container\n      --network string                        Connect a container to a network (default "default")\n      --network-alias list                    Add network-scoped alias for the container (default [])\n      --no-healthcheck                        Disable any container-specified HEALTHCHECK\n      --oom-kill-disable                      Disable OOM Killer\n      --oom-score-adj int                     Tune host\'s OOM preferences (-1000 to 1000)\n      --pid string                            PID namespace to use\n      --pids-limit int                        Tune container pids limit (set -1 for unlimited)\n      --privileged                            Give extended privileges to this container\n  -p, --publish list                          Publish a container\'s port(s) to the host (default [])\n  -P, --publish-all                           Publish all exposed ports to random ports\n      --read-only                             Mount the container\'s root filesystem as read only\n      --restart string                        Restart policy to apply when a container exits (default "no")\n      --rm                                    Automatically remove the container when it exits\n      --runtime string                        Runtime to use for this container\n      --security-opt list                     Security Options (default [])\n      --shm-size string                       Size of /dev/shm, default value is 64MB\n      --stop-signal string                    Signal to stop a container, SIGTERM by default (default "SIGTERM")\n      --stop-timeout int                      Timeout (in seconds) to stop a container\n      --storage-opt list                      Storage driver options for the container (default [])\n      --sysctl map                            Sysctl options (default map[])\n      --tmpfs list                            Mount a tmpfs directory (default [])\n  -t, --tty                                   Allocate a pseudo-TTY\n      --ulimit ulimit                         Ulimit options (default [])\n  -u, --user string                           Username or UID (format: <name|uid>[:<group|gid>])\n      --userns string                         User namespace to use\n      --uts string                            UTS namespace to use\n  -v, --volume list                           Bind mount a volume (default [])\n      --volume-driver string                  Optional volume driver for the container\n      --volumes-from list                     Mount volumes from the specified container(s) (default [])\n  -w, --workdir string                        Working directory inside the container\n')])])]),t("h3",{attrs:{id:"启动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动"}},[e._v("#")]),e._v(" 启动")]),e._v(" "),t("p",[e._v("启动一个或者多个停止状态的容器")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("docker start [OPTIONS] CONTAINER [CONTAINER...]\n")])])]),t("p",[t("strong",[e._v("Options:")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("  -a, --attach               Attach STDOUT/STDERR and forward signals\n      --detach-keys string   Override the key sequence for detaching a container\n      --help                 Print usage\n  -i, --interactive          Attach container's STDIN\n")])])]),t("h3",{attrs:{id:"停止"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#停止"}},[e._v("#")]),e._v(" 停止")]),e._v(" "),t("p",[e._v("停止一个或者多个正在运行的容器")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("docker stop [OPTIONS] CONTAINER [CONTAINER...]\n")])])]),t("p",[t("strong",[e._v("Options:")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("      --help       Print usage\n  -t, --time int   Seconds to wait for stop before killing it (default 10)\n")])])]),t("h3",{attrs:{id:"重启"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重启"}},[e._v("#")]),e._v(" 重启")]),e._v(" "),t("p",[e._v("重启一个或者多个容器")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("docker restart [OPTIONS] CONTAINER [CONTAINER...]\n")])])]),t("p",[t("strong",[e._v("Options:")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("      --help       Print usage\n  -t, --time int   Seconds to wait for stop before killing the container (default 10)\n")])])]),t("h3",{attrs:{id:"删除-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除-2"}},[e._v("#")]),e._v(" 删除")]),e._v(" "),t("p",[e._v("删除一个或者多个容器。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("docker rm [OPTIONS] CONTAINER [CONTAINER...]\n")])])]),t("p",[t("strong",[e._v("Options:")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("  -f, --force     Force the removal of a running container (uses SIGKILL)\n      --help      Print usage\n  -l, --link      Remove the specified link\n  -v, --volumes   Remove the volumes associated with the container\n")])])]),t("h3",{attrs:{id:"执行命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#执行命令"}},[e._v("#")]),e._v(" 执行命令")]),e._v(" "),t("p",[e._v("在运行的容器中执行指令")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("docker exec [OPTIONS] CONTAINER COMMAND [ARG...]\n")])])]),t("p",[e._v("Options:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("  -d, --detach               Detached mode: run command in the background\n      --detach-keys string   Override the key sequence for detaching a container\n  -e, --env list             Set environment variables (default [])\n      --help                 Print usage\n  -i, --interactive          Keep STDIN open even if not attached\n      --privileged           Give extended privileges to the command\n  -t, --tty                  Allocate a pseudo-TTY\n  -u, --user string          Username or UID (format: <name|uid>[:<group|gid>])\n")])])]),t("h4",{attrs:{id:"示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[e._v("#")]),e._v(" 示例")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("进入容器命令行")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("docker exec -i -t CONTAINER /bin/bash\n")])])])])]),e._v(" "),t("h3",{attrs:{id:"查看列表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看列表"}},[e._v("#")]),e._v(" 查看列表")]),e._v(" "),t("p",[e._v("列出容器")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("docker ps [OPTIONS]\n")])])]),t("p",[t("strong",[e._v("Options:")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("  -a, --all             展示所有容器（默认只展示运行中的容器）\n  -f, --filter filter   Filter output based on conditions provided\n      --format string   Pretty-print containers using a Go template\n      --help            Print usage\n  -n, --last int        Show n last created containers (includes all states) (default -1)\n  -l, --latest          Show the latest created container (includes all states)\n      --no-trunc        Don't truncate output\n  -q, --quiet           Only display numeric IDs\n  -s, --size            Display total file sizes\n")])])]),t("h3",{attrs:{id:"查看信息-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看信息-2"}},[e._v("#")]),e._v(" 查看信息")]),e._v(" "),t("p",[e._v("查看容器信息")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("docker inspect [OPTIONS] NAME|ID [NAME|ID...]\n")])])]),t("p",[t("strong",[e._v("Options:")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("  -f, --format string   Format the output using the given Go template\n  -s, --size            Display total file sizes if the type is container\n      --type string     Return JSON for specified type\n")])])])])}),[],!1,null,null,null);t.default=i.exports}}]);