const svrx = require('@svrx/svrx')

svrx({
  port: 8088,
  open: false,
  route: 'server/route.ts',
  plugins: [
    // {
    //   name: 'parcel',
    //   options: {
    //     // you can pass string or object
    //     // watch: false
    //     // minify: true
    //     entry: 'example/index.html'
    //   }
    // },
    {
      name: 'json-server',
      options: {
        source: 'server/mock/db.json'
      }
    }
  ]
}).start()
