fig=docker-compose

### 最初にやる時

```
fig build
```

### サーバー立ち上げたい時

```
fig up
```

### コンテナの中に入りたい時

```
fig run [container name] bash
```

bundle install

```
fig run app bundle install
```

### railsコマンドを使いたい時

```
bin/spring [rails command]
```

### コンテナの中の任意のコマンドを実行したい時

```
fig run [container name] [command]
```

### 環境変数を適用
```
cp ./rails_app/.env.sample ./rails_app/.env
```


### binding.pryで対話実行したい時


(binding.pryで停止した後)
```
docker ps 
```
コンテナの名前を調べて（xxxxx_app_1など）
```
docker attach xxxxx_app_1
```

### コンテナの時間合わせ

https://github.com/arunvelsriram/docker-time-sync-agent
