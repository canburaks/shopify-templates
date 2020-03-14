# shopify-templates

#### new template
theme new --password=[your-api-password] --store=[your-store.myshopify.com] --name=[theme name]


#### get existing template ID
theme get --list -p=[your-api-password] -s=[you-store.myshopify.com]

  [88386830395] Debut
  [89560875067] cbs-theme
  [89574539323] debut-cbs
  [91469807675] Debut temasının kopyası
  [91474329659][live] Simple

#### existing template
theme get -p=[your-api-password] -s=[you-store.myshopify.com] -t=[your-theme-id]


#### open 
theme open


#### watch 
theme watch --notify=/var/tmp/theme_ready
