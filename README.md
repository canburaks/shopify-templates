# shopify-templates

#### new template
theme new --password=[your-api-password] --store=[your-store.myshopify.com] --name=[theme name]


#### get existing template ID
theme get --list -p=86fa181b94ca6ee69e73397ca7bd0fb1 -s=la-cuisinette.myshopify.com

  [93944217659] debut-cbs-latest
  [93945364539] cbs-debut-with-apps
  [94040293435][live] cbs-debut-no-app

#### existing template
theme get -p=[your-api-password] -s=[you-store.myshopify.com] -t=[your-theme-id]


#### open 
theme open


#### watch 
theme watch --notify=/var/tmp/theme_ready
