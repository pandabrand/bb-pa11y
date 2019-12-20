import pa11y from 'pa11y';

const reporter = function(url, time, test = {}) {
    pa11y(url.loc, {
        includeWarnings: true,
        runners: ['axe', 'htmlcs'],
        standard: 'WCAG2AAA'
    }).then((results) => {
        results.time = time;
        if(test) {
            results.test = test.id
        }
        url.collection('aaa_results')
        .add(results);
        console.dir(url);
    });
}

export default reporter;