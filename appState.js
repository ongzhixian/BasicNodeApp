const EVENT_EXIT = 'exit';

const EVENT_SIGTERM = 'SIGTERM';
const EVENT_SIGINT = 'SIGINT';
const EVENT_SIGQUIT = 'SIGQUIT';
const EVENT_SIGKILL = 'SIGKILL';
const EVENT_SIGHUP = 'SIGHUP';

const TERMINATION_SIGNALS = [EVENT_SIGTERM, EVENT_SIGINT, EVENT_SIGQUIT, EVENT_SIGKILL, EVENT_SIGHUP]

const MAX_SIGNED_INT = 2147483647;

process.on(EVENT_EXIT, exitCode => {
    console.log(`Process exited with code: ${exitCode}`)
});

TERMINATION_SIGNALS.forEach(
    (terminationSignal) => process.on(terminationSignal, signal => {
        console.log(`Process ${process.pid} received a ${terminationSignal} signal`)
        process.exit(0)
    })
);

module.exports = (() => {

    // MAX_SIGNED_INT ~= 24.86 days
    this.keepAliveIntervalId = setInterval(() => {}, MAX_SIGNED_INT); 

    this.Name = "AnonymousAppState";

    this.DoSomething = function() {
        console.log("AnonymousAppState DoSomething");
    }

    return this;
})();
