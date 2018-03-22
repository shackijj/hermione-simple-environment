module.exports = (hermione, opts) => {
    hermione.on(hermione.events.BEGIN, () => {
      return opts.loadFixtures()
        .then(() => opts.startServer())
    });

    hermione.on(hermione.events.EXIT, () => {
        return opts.stopServer();
    });
};