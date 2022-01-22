# yes

The ideal way to use `yes` is to fork this repo and host it on `<activity>.<domain>`, and make a sheet in shared Google Sheet with name `domain` eg: aashutosh.dev and Column Structure like below

Also, please replace `sheetId` in `index.js` with your `sheetId` from SheetDB.io

| activity  | doingIt? |
|---|---|
| is-sleeping | No |
| is-covid-positive  | Not yet  |

For eg. `is-sleeping.aashutosh.dev` would result in a big `No!` as per above data.

## Debug

To debug something, if you are not on the ideal domain, you can always add url as query param.
Eg: `https://wrong.domain?url=is-sleeping.aashutosh.dev` to test if your activity is being fetched correctly.

## Motivation

Excitement to share whether my roomie is sleeping or not.
