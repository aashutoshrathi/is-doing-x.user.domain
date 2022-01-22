// Make url allows you to debug by adding query param ?url=http://activity.domain.com
const sheetId = '<from sheetDb.io>';
const params = (new URL(document.location)).searchParams;
const url = params.get("url") ?? location.hostname;

const domain = url.split('.').splice(-2).join('.');
const subdomain = url.split(`.${domain}`)[0];

// Sheet Name - Domain, activity - Subdomain
console.log({ domain, subdomain });

SheetDB.read(`https://sheetdb.io/api/v1/${sheetId}`, {
    sheet: domain,
    search: {
        activity: subdomain
    }
}).then(function (result) {
    console.log(result[0]);
    const status = result?.[0]?.['doingIt?'] ?? 'No idea bro';
    document.getElementById('status').innerText = status + '!';
}, function (error) {
    console.log(error);
});
