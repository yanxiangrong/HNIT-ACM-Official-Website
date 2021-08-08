# 湖南工学院ACM官网

官网地址 <https://web.hnitoj.cn/home>  
开发语言: TypeScript, css  
框架: React, Ant Design

## 部署

首先你需要安装 Docker 和 Docker-Compose

Docker 官方安装教程 <https://docs.docker.com/engine/install/>  
通过脚本安装:
```shell
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
```
Docker-Compose 官方安装教程 <https://docs.docker.com/compose/install/>  
安装 Docker-Compose

````shell
sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
````

如果找不到 `docker-compose` 命令

```shell
sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
```

然后进入项目目录
创建几个文件夹

```shell
mkdir ./log
mkdir ./log/web
mkdir ./build
```

开始构建

```shell
sudo docker-compose up -d
```

接下来会自动构建2个镜像 `hnit-acm-official-website_npm-build` 和 `hnit-acm-official-website_web`  
并创建2个服务 `npm-build` 和 `acm-web-nginx`  
`npm-build` 是用来构建网站的，正常来说会在几分钟后停止运行
可以用 `sudo docker logs -f npm-build` 来查看构建日志  
如果要重新构建，运行该服务即可 `sudo docker start npm-build`

完成后会监听 80 端口，如果要改为其它端口请修改 `docker-compose.yml` 文件
```yaml
web:
build:
  context: ./nginx
  dockerfile: Dockerfile
container_name: acm-web-nginx
hostname: acmweb
volumes:
  - ./build:/var/www/web
  - ./nginx/conf.d:/etc/nginx/conf.d
  - ./log:/var/log/nginx
ports:
  - "80:80"   #左边的 80 即为外部端口
restart: always
```

### 一键部署脚本
```shell
sudo sh ./deploy.sh
```

## 更新

如果代码有修改，需要重置修改
```shell
git reset --hard
```

更新本地代码
```shell
git pull --ff-only
```

重新构建

```shell
sudo docker start npm-build
```

如果修改了 Nginx 的配置，还需要重启一下 `acm-web-nginx` 服务

```shell
sudo docker restart acm-web-nginx
```

### 一键更新脚本
```shell
sudo sh ./update.sh
```

## 开发

### 关于后端

后端数据会通过 Nginx 转发。  
具体请参考 Nginx 配置文件 `nginx/conf.d/web.conf`

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
