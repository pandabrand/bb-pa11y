import pa11y from 'pa11y';

// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
exports.handler = async (event, context) => {
  try {
    const parsedBody = JSON.parse(event.body);
    console.dir(parsedBody);
    
    pa11y(parsedBody.loc, {})
    .then(results => {
      console.dir(results);
      return {
        statusCode: 200,
        body: results
        // // more keys you can return:
        // headers: { "headerName": "headerValue", ... },
        // isBase64Encoded: true,
      }
    })
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
