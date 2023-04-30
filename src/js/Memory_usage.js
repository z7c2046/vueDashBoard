const chart = new G2.Chart({
    container: 'Memory_usage',
    theme: 'classic',
    autoFit: true,
});

chart
    .gauge()
    .data({
        value: {
            target: 50,
            total: 100,
            name: 'SCORE',
        },
    })
    .legend(false)
    .axis('value', {
        line: null,
        label: null,
        tickLine: null,
        subTickLine: null,
    });

chart.render();
